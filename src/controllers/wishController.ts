import { Response } from "express";
import Wish from "../models/Wish";
import User from "../models/User";
import { AuthRequest } from "../middlewares/checkAuth";

export const addWish = async (req: AuthRequest, res: Response) => {
    try {
        const { imageURL, caption, price, description, wishURL } = req.body;
        const userId = req.userId;
        if (!userId) {
            return res.status(403).json({ message: "You dont have permission to add wish" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const newWish = new Wish({
            authorId: userId,
            imageURL,
            caption,
            price,
            description,
            wishURL,
        });

        await newWish.save();

        user.wishList.push(newWish._id);
        await user.save();
        return res.status(201).json(newWish);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

export const editWish = async (req: AuthRequest, res: Response) => {
    try {
        const wishId = req.params.id;
        const userId = req.userId;
        const updateData = req.body;

        if (!userId) {
            return res.status(403).json({ message: "You dont have permission to edit wish" });
        }

        const wish = await Wish.findById(wishId);
        if (!wish) {
            return res.status(404).json({ message: "Wish not found" });
        }

        if (userId.toString() !== wish.authorId.toString()) {
            return res
                .status(403)
                .json({ message: "You are not authorized and dont have permission to edit wish" });
        }

        Object.assign(wish, updateData);

        await wish.save();

        return res.status(201).json(wish);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

export const deleteWish = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        const wishId = req.params.id;
        const userId = req.userId;

        if (!userId) {
            res.status(403).json({ message: "You dont have permission to edit wish" });
            return;
        }

        const wish = await Wish.findById(wishId);
        if (!wish) {
            res.status(404).json({ message: "Wish not found" });
            return;
        }

        if (userId.toString() !== wish.authorId.toString()) {
            res.status(403).json({
                message: "You are not authorized and dont have permission to edit wish",
            });
            return;
        }

        await Wish.findByIdAndDelete(wishId);
        await User.findByIdAndUpdate(userId, { $pull: { wishList: wishId } });

        res.status(200).json({ message: "Wish delete successfully" });
        return;
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        return;
    }
};
