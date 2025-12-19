import express from "express";
const app = express();

app.get("/Home", (req, res) => {
    res.send("hello world");
});

app.post("/gourav", (req, res) => {
    res.send("Post Bhoot");
});

app.delete("/gourav", (req, res) => {
    res.send("delted !!");
});

app.listen(8000, () => {
    console.log("Service in running on 8000");
});
