import { app } from "./app.js";
import { connectDB } from "./database/db.js";

await connectDB();

const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
