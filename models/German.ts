import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;
import { germanInfo } from "../types/types"


const germanSchema = new Schema<germanInfo>(
    {
        name: {
            type: "String",
            required: true,
            maxlength: 20,
        },
        word: {
            type: String,
            required: true,
            maxLength:70,
        },
        points: {
            type: Number,
            required: true,
            default: 0,
            max: 100,
            min: 0,
            validate(val: number) {
                if (val < 0 || val > 100) {
                    throw new Error('Points must be between 0 and 100');
                }
            }
        },
    },
    {
        timestamps: true
    }
);

const German = model<germanInfo>("germanWordswo", germanSchema);

export default German;