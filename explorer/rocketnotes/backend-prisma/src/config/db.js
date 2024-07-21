const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const connectarDB = async () => {
	try {
		await db.$connect();
		console.log("Conectado com sucesso ao banco de dados!");
	} catch (error) {
		console.log("Erro ao conectar com o banco de dados", error);
		process.exit(1);
	}
};

module.exports = { db, connectarDB };
