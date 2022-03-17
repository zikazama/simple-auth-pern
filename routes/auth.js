const express = require("express");

const { 
  login,
} = require("../controllers/Auth.js");

const router = express.Router();

router.post('/login', login);

exports.authRoutes = router;

