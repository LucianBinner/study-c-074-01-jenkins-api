const { generateRadomNumber } = require("../helpers/main-herlpers")

async function getDataController(req, res) {
    try {
        const randomNumber = generateRadomNumber()
        res.status(200).json({
            randomNumber,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    getDataController
}