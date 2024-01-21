import express from "express";
import connectDB from "./connect.db.js";
import userRoutes from "./User/user.routes.js";

const app = express();
// To make app understand json data
app.use(express.json());

// connecting database
await connectDB();

// register routes
app.use(userRoutes);
// Making port to run in localport
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
