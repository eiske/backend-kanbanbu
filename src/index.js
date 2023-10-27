import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Kanbanbu");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
