const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const body = JSON.parse(req.body);
  console.log("email body", body);
  const message = `
  Subject: ${body.subject}\r\n
    Name: ${body.fName} ${body.lName}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  await mail
    .send({
      to: "swatharindra@gmail.com",
      from: "chamara@mdidev.com",
      subject: "New Message!",
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });

  res.status(200).json({ status: "Ok" });
}
