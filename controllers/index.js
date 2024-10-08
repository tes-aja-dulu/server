class Controller {
    static async login(request, response, next) {
        try {
            // logic login
            response.status(200).json({
                message: "succes login"
            })
        } catch (error) {
            response.status(500).json({

                message: "internal server error"
            })
        }
    }

    static async register(request, response, next) {
        try {
            // berisi logic register
            response.status(201).json({
                message: "success created user"
            })

        } catch (error) {
            response.status(500).json({
                message: "internal server error"
            })
        }
    }
}

module.exports = Controller