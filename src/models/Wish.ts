import mongoose, { Document, Schema } from "mongoose";

export interface IWish extends Document {
    authorId: mongoose.Types.ObjectId;
    imageURL: string;
    caption: string;
    price: number;
    description: string;
    whishURL: string;
}

const WishSchema: Schema = new Schema({
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imageURL: { type: String },
    caption: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    whishURL: { type: String },
});

export default mongoose.model<IWish>("Wish", WishSchema);
