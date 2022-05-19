import mongoose from "mongoose";

const literatyra = new mongoose.Schema({

    name:{type: String},
    questions:[{type: Object}]
})

export default mongoose.model("literatyra", literatyra);