import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IUser extends Document {
    email: string;
    passwordHash: string;
    username: string;
    wishList: mongoose.Schema.Types.ObjectId[];
}

const userSchema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    username: { type: String, required: true },
    wishList: [{ type: mongoose.Schema.Types.ObjectId, unq: true, ref: "Wish" }],
});

export default mongoose.model<IUser>("User", userSchema);
