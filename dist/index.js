import express from "express";
const port = 3000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ msg: "hey" });
});
app.get("/get", (req, res) => {
    res.json({ msg: "hey is this get endpoint?" });
});
app.get("/all", (req, res) => {
    res.json({ msg: "hey" });
});
app.post("/signup", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(404).json({ msg: "empty data" });
    }
    res.json({ msg: "hey you are signed u" });
});
app.listen(port, () => { console.log(`connected to port ${port}`); });
//# sourceMappingURL=index.js.map