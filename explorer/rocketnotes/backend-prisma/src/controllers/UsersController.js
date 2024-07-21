const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const { db } = require("../config/db");

class UserController {
	async create(request, response) {
		try {
			const { name, email, password } = request.body;

			if (!name || !email || !password) {
				return response.status(400).json(new AppError("Dados inválidos", 400));
			}

			const checkUserExists = await db.user.findUnique({
				where: { email },
			});

			if (checkUserExists) {
				throw new AppError("Email já cadastrado", 400);
			}

			const hashedPassword = await hash(password, 10);

			await db.user.create({
				data: {
					name,
					email,
					password: hashedPassword,
				},
			});

			return response.status(201).send();
		} catch (error) {
			response.status(error.statusCode || 500).json({ error: error.message });
		}
	}

	async update(request, response) {
		try {
			const { name, email, password, old_password } = request.body;
			const user_id = request.user.id;

			const user = await db.user.findUnique({
				where: { id: user_id },
			});

			if (!user) {
				throw new AppError("Usuário não encontrado", 404);
			}

			const userWithUpdatedEmail = await db.user.findFirst({
				where: {
					email,
					NOT: {
						id: user_id,
					},
				},
			});

			if (userWithUpdatedEmail) {
				throw new AppError("Este e-mail já está em uso");
			}

			if (password && !old_password) {
				throw new AppError("Senha antiga não informada");
			}

			const updatedUserData = {
				name: name ?? user.name,
				email: email ?? user.email,
			};

			if (password && old_password) {
				const checkOldPassword = await compare(old_password, user.password);

				if (!checkOldPassword) {
					throw new AppError("Senha antiga incorreta");
				}

				updatedUserData.password = await hash(password, 10);
			}

			await db.user.update({
				where: { id: user_id },
				data: updatedUserData,
			});

			return response
				.status(200)
				.json({ message: "Usuário atualizado com sucesso" });
		} catch (error) {
			response.status(error.statusCode || 500).json({ error: error.message });
		}
	}
}

module.exports = new UserController();
