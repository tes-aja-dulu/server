const router = require('express').Router()
const Controller = require("../controllers/index")

router.post("register", Controller.register)

module.exports = router