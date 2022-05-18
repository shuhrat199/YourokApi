import mongoose from "mongoose";

const testers = new mongoose.Schema({

    name:{type: String},
    questions:[{type: Object}]
})

export default mongoose.model("testers", testers);