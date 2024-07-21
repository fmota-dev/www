const { Router } = require("express");
const notesController = require("../controllers/NotesController");
const notesRoutes = Router();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

notesRoutes.use(ensureAuthenticated);

notesRoutes.post("/", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.get("/", notesController.showAll);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;
