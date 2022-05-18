import testers from "./testers.js"


class Controller
{
    async getHistory(req, res)
    {

        try {
            const checkDb = await testers.find()
            return res.json(checkDb)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new Controller();