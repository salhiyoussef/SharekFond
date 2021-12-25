const express = require("express");
const passport = require("passport");
const router = express.Router();

// R O U T E S   U S E R S
require("./usersRoute")(router, passport);

module.exports = router