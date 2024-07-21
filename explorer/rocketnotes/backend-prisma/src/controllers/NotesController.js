const { db } = require("../config/db");
const AppError = require("../utils/AppError");

class NotesController {
	async create(request, response) {
		const { title, description, tags, links } = request.body;
		const user_id = request.user.id;
		const createdNote = await db.note.create({
			data: {
				title,
				description,
				user_id: user_id,
				Tags: {
					create: tags.map((tag) => ({
						name: tag,
					})),
				},
				Links: {
					create: links.map((link) => ({
						url: link,
					})),
				},
			},
		});

		return response
			.status(201)
			.json({ message: "Nota criada com sucesso", createdNote });
	}

	async show(request, response) {
		const { id } = request.params;

		const note = await db.note.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				Tags: {
					select: {
						id: true,
						name: true,
					},
				},
				Links: true,
			},
		});

		return response.status(200).json(note);
	}

	async showAll(request, response) {
		const { title, tags } = request.query;

		const user_id = request.user.id;

		let notes;

		if (tags) {
			const filterTags = tags.split(",").map((tag) => tag.trim());

			notes = await db.note.findMany({
				include: {
					Tags: true,
					Links: true,
				},
				where: {
					user_id: Number(user_id),
					Tags: {
						some: {
							name: {
								in: filterTags,
							},
						},
					},
				},
				orderBy: {
					title: "asc",
				},
			});
		}

		notes = await db.note.findMany({
			include: {
				Tags: true,
			},
			where: {
				user_id: Number(user_id),
				title: {
					contains: title,
				},
			},
			orderBy: {
				title: "asc",
			},
		});

		return response.status(200).json(notes);
	}

	async delete(request, response) {
		try {
			const { id } = request.params;

			const note = await db.note.findUnique({
				where: {
					id: Number(id),
				},
			});

			if (!note) {
				throw new AppError("Nota não encontrada", 404);
			}

			await db.note.delete({
				where: {
					id: Number(id),
				},
			});

			return response
				.status(200)
				.json({ message: "Nota deletada com sucesso" });
		} catch (err) {
			return response.status(err.statusCode).json({ error: err.message });
		}
	}
}

module.exports = new NotesController();
