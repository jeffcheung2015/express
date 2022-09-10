const express = require("express");
const app = express();
const port = 8080;
// bcrypt for

app.get("/", (req, res) => {
  res.send({
    abc: 2,
  });
});

app.get("/user", (req, res) => {
  res.send({
    user: "Lun",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
