import contactModel from "../models/contactModels.js";

//     Add new contact
//    POST /api/contact/add
const addContact = async (req, res) => {
    const { name, email, phone, message, category } = req.body;

    try {
        const newContact = new contactModel({
            name, email, phone, message, category
        });

        await newContact.save();
        res.json({ success: true, message: "Contact added successfully!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding contact" });
    }
};

//    Get all contacts
//    GET /api/contact/list
const listContacts = async (req, res) => {
    try {
        const contacts = await contactModel.find({}).sort({ createdAt: -1 }); // Newest first
        res.json({ success: true, data: contacts });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching list" });
    }
};

// @desc    Remove contact (Bonus Task)
// @route   POST /api/contact/remove

const removeContact = async (req, res) => {
    try {
        const { id } = req.body;
        
        // 1. Debugging: Log the ID to see if it's actually reaching the backend
        console.log("Attempting to delete ID:", id);

        // 2. Perform the delete and store the result
        const deletedContact = await contactModel.findByIdAndDelete(id);

        // 3. Check if something was actually found and deleted
        if (!deletedContact) {
            return res.json({ success: false, message: "Contact not found in DB" });
        }

        res.json({ success: true, message: "Contact removed successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing contact" });
    }
};

export { addContact, listContacts, removeContact };