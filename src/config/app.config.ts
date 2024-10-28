import express from "express";
import router from "./../routes/route";

// creating express app
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(router);

export default app;
