const router = require('express').Router()
const Controller = require("../controllers/index")

app.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post("login", Controller.login)

module.exports = router