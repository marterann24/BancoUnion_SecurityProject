const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = Router();

// GET    /api/users        → lista todos los empleados
// GET    /api/users/:id    → obtiene uno por ID
// POST   /api/users        → crea un nuevo empleado
// PUT    /api/users/:id    → actualiza un empleado
// DELETE /api/users/:id    → elimina un empleado
router.get("/",       getAllUsers);
router.get("/:id",    getUserById);
router.post("/",      createUser);
router.put("/:id",    updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
