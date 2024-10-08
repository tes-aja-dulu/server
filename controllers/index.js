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
}

module.exports = Controller