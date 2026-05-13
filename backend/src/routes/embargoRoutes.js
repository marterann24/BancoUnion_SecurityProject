const { Router }  = require("express");
const {
  getAllEmbargos,
  getEmbargoById,
} = require("../controllers/embargoController");

const router = Router();

// GET /api/embargos       → lista todos los embargos
// GET /api/embargos/:id   → obtiene uno por ID
router.get("/",    getAllEmbargos);
router.get("/:id", getEmbargoById);

module.exports = router;
