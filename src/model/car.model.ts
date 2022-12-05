import { Schema, Types, model, Model } from 'mongoose';
import { Car } from '../interface/Car';

const ItemSchema = new Schema<Car>({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    gas: {
        type: String,
        required: true,
        enum: ["gasoline", "electric"]
    },
    year: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default model("items", ItemSchema);