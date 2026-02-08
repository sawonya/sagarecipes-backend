import User from "../models/User.js";

// GET /api/users/profile
export const getProfile = async (req, res) => {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
};

// PUT /api/users/profile
export const updateProfile = async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    const updatedUser = await user.save();
    res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email
    });
};
