import express, { Express } from "express";
// Initialize Express application
const app: Express = express();

app.get("/", (req, res) => {
    res.send("Hello, World!");
});


export default app;