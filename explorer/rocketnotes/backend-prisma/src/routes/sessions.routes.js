const { Router } = require("express");

const sessionController = require("../controllers/SessionsController");
const sessionsRoutes = Router();

sessionsRoutes.post("/", sessionController.create);

module.exports = sessionsRoutes;
