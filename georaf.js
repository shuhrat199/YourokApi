import mongoose from "mongoose";

const georaf = new mongoose.Schema({

    name:{type: String},
    questions:[{type: Object}]
})

export default mongoose.model("georaf", georaf);