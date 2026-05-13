const { Router } = require("express");
const { login }  = require("../controllers/authController");

const router = Router();

// POST /api/auth/login  ⚠️ Vulnerable a SQL Injection (demo auditoría)
router.post("/login", login);

module.exports = router;
