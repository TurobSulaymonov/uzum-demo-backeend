import mongoose, { model, Schema } from "mongoose";


const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    fullName: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, requierd: true, default: 'user'},
    avatar: {type: String},
    isDeleted: {type: Boolean, default: false },
    deletedAt: {type: Date},
    favorites: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    customerId: {type: String},
}, {timestamps: true}
) 

    const User = mongoose.models.user || mongoose.model('user', userSchema)

    export default User;