const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/UserRoute");
const eventRouter = require("./routes/EventRoute");
const clientRouter = require("./routes/ClientRoute");
const imagesRouter = require("./routes/ImagesRoute");

connectDB();
// midelweres
app.use(cors());
app.use(express.json());
app.use("/api/auth", userRouter);
app.use("/api/event", eventRouter);
app.use("/api/client", clientRouter);
app.use("/api/images", imagesRouter);

const port = 9000;
app.listen(port, console.log(`server runing on port:${port}`));
