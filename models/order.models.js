import { Schema } from "mongoose";


const orderSchema = new Schema({
    user:{type: Schema.Types.ObjectId, ref: 'User', required: true},
    prduct: {type: Number, required: true},
    status: {type: String, default: 'Pending confirm'},
}, {timestamps: true})

module.exports = model("Order", orderSchema) 