import { Response } from "express";
import { AuthRequest } from "../middlewares/checkAuth";
import User from "../models/User";

export const getUser = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId)
            .select("-passwordHash")
            .populate("wishList")
            .exec();
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.status(200).json(user);
        return;
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        return;
    }
};
