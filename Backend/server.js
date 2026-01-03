import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import contactRouter from "./routes/contactRoutes.js";
import dotenv from "dotenv";
import requestLogger from './middleware/logger.js'
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
// App Config
const app = express();

const port = process.env.PORT||4000;

// Middleware
app.use(express.json()); 
app.use(cors());  
// It will log All incoming request
app.use(requestLogger);



// DB Connection
connectDB();

// API Endpoints
app.use("/api/contacttoash", contactRouter);

app.get("/", (req, res) => {
    res.send("API Working");
});
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});