const { Router } = require("express");
const tagsController = require("../controllers/tagsController");
const tagsRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);

module.exports = tagsRoutes;
