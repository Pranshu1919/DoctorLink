module.exports = (req, res, next) => {

    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: "Please login first.",
        });
    }

    if (req.user.role !== "patient") {
        return res.status(403).json({
            success: false,
            message: "Access denied. Patient only.",
        });
    }

    next();
};