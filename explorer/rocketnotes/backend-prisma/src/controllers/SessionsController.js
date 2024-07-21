const { db } = require("../config/db");
const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../config/auth");
const { sign } = require("jsonwebtoken");

class SessionsController {
	async create(req, res) {
		const { email, password } = req.body;

		try {
			const user = await db.user.findUnique({
				where: {
					email,
				},
			});

			if (!user) {
				throw new AppError("E-mail e/ou senha incorreta", 401);
			}

			const passwordMatch = await compare(password, user.password);

			if (!passwordMatch) {
				throw new AppError("E-mail e/ou senha incorreta", 401);
			}

			const { secret, expiresIn } = authConfig.jwt;

			const token = sign({}, secret, {
				subject: String(user.id),
				expiresIn,
			});

			return res.json({ user, token });
		} catch (error) {
			return res.status(error.statusCode).json({ message: error.message });
		}
	}
}

module.exports = new SessionsController();
