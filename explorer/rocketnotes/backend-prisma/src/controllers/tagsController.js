const { db } = require("../config/db");

class TagsController {
	/**
	 * Retorna as tags associadas às notas do usuário e as retorna como uma resposta JSON.
	 *
	 * @param {Object} request - O objeto de requisição.
	 * @param {Object} response - O objeto de resposta.
	 * @return {Object} Resposta JSON contendo as tags associadas às notas do usuário.
	 */
	async index(request, response) {
		const user_id = request.user.id;

		const userNotes = await db.note.findMany({
			where: {
				user_id,
			},
			include: {
				Tags: true,
			},
		});

		const tags = userNotes
			.flatMap((note) => note.Tags)
			.filter((tag) => tag !== null);

		return response.status(200).json(tags);
	}
}

module.exports = new TagsController();
