import { Schema, Types, model, Model } from 'mongoose';
import { Users } from '../interface/Users';

const UserSchema = new Schema<Users>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default model("users", UserSchema);