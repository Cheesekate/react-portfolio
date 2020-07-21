require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const sgMail = require("@sendgrid/mail");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("client/build"));

app.get("/contact", (req, res, next) => {
  res.send("API Status: Running");
});

app.post("/api/email", (req, res, next) => {
  sgMail.setApiKey(process.env.SENDGRID_APIKEY);
  const msg = {
    to: req.body.email,
    from: "katewade0@gmail.com",
    subject: "Website Contact",
    text: req.body.message,
  };

  sgMail
    .send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.status(401).json({
        success: false,
      });
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(PORT, () => console.log("Application running on port " + PORT));
