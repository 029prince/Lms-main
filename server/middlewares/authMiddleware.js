import { clerkClient } from "@clerk/express";

// Middleware (Protect Educator Routes)
export const protectEducator = async (req, res, next) => {
    try {
        const auth = await req.auth();

        if (!auth?.userId) {
            return res.status(401).json({ success: false, message: 'User not authenticated' });
        }

        const response = await clerkClient.users.getUser(auth.userId);

        if (response.publicMetadata.role !== 'educator') {
            return res.status(403).json({ success: false, message: 'Unauthorized Access' });
        }

        next();
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
