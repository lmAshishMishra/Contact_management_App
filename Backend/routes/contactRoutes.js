import { ValidateContact } from "../middleware/Validator.js";




import { addContact, listContacts, removeContact } from "../controllers/contactController.js";



import express from "express";

const contactRouter = express.Router();
// The validator runs BEFORE addContact
contactRouter.post("/add", ValidateContact, addContact);
contactRouter.get("/list", listContacts);
contactRouter.post("/remove", removeContact);

export default contactRouter;