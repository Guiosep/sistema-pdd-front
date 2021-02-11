const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const path = require("path");

const fileDirectory = path.resolve(__dirname, "./dist")

app.use(express.static(fileDirectory));

app.get("*", (req, res) => {
  res.sendFile("index.html", { root: fileDirectory }, (err) => {
    res.end()

    if (err) throw err;
  });
});

app.listen(port, () =>
  console.log(`App listening deploy at http://localhost:${port}`)
);