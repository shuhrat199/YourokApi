import georaf from "./georaf.js"
import history from "./history.js"
import literatyra from "./literatyra.js"


class Controller
{
    async getHistory(req, res)
    {

        try {
            const checkDb = await history.find()
            return res.json(checkDb)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getliter(req, res)
    {
        try {
            const checkDb = await literatyra.find()
            return res.json(checkDb)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async getGeog(req, res)
    {
        try {
            const checkDb = await georaf.find()
            return res.json(checkDb)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new Controller();