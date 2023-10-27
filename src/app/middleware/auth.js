import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Authorization error" });
    }

    const [, token] = authHeader.split(" ");

    try {
        const decoded = jwt.verify(token, authConfig.secret);

        console.log("decoded: ", decoded);

        req.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
};
