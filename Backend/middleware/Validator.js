
export const ValidateContact = (req, res, next) => {
    // Check if body exists at all to avoid "undefined" crash
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ 
            success: false, 
            message: "No data was sent in the request body." 
        });
    }

    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ 
            success: false, 
            message: "Validation Failed: Name, Email, and Phone are required." 
        });
    }

    next(); // All good, move to Controller
};