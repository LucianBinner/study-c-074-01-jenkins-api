async function getDataController(req, res) {
    try {
        res.status(200).json({
            ok: true
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