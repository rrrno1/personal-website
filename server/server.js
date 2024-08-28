const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 587,
  secure: false,
  auth: {
    user: "1429964401@qq.com",
    pass: "fonwkhgiihiogbaa",
  },
});

app.post("/submit-form", (req, res) => {
  const { email, name, message } = req.body;

  const mailOptions = {
    from: "1429964401@qq.com",
    to: "1429964401@qq.com",
    subject: "New Form Submission",
    text: `
      Email: ${email}
      Name: ${name}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Form submitted successfully");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
