class Controller {
    static async register(req, res, next) {
        try {
            // berisi logic register
            res.status(201).json({
                message: "success created user"
            })

        } catch (error) {
            res.status(500).json({
                message: "internal server error"
            })
        }
    }
}

module.exports = Controller