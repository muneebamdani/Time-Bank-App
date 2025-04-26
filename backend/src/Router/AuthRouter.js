const express = require("express");
const router = express.Router();
const { Singup, Login } = require("../Controller/AuthController")


router.post("/singup", Singup);
router.post("/Login", Login);



module.exports = router;