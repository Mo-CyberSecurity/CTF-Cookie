const express = require("express"),
  app = express(),
  cookieParser = require("cookie-parser");

const port = process.env.YOUR_PORT || process.env.PORT || 8080;
const step1 = "admin";
const step2 = "nothing_important_keep_funny_smiley('^_^')____(url-decode)";
const step3 = "^_^";
const fakeFlag = "bm90U29GYXN0";
app.use(cookieParser("secret key"));

app.get("/", (req, res) => {
  if (req.cookies.token === step1) {
    res.cookie("token", step2);
    res.send(fakeFlag);
  } else if (req.cookies.token === step3) {
    res.sendFile(__dirname + "/" + "secound.html");
  } else {
    res.cookie("token", "user");
    res.sendFile(__dirname + "/" + "index.html");
  }
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});
