require("dotenv").config(); // load environment variables
import express from "express";

const app = express();

app.get("*", (req, res) => {
  res.status(200).json({
    message: "Hello, world!",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
