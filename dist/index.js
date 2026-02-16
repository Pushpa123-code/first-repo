import express from "express";
const port = 3000;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ msg: "hey" });
});
app.listen(port, () => { console.log(`connected to port ${port}`); });
//# sourceMappingURL=index.js.map