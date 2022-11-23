import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey('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');

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: `${req.body.email}`, // Your email where you'll receive emails
      from: {
        email: "newtymathias@gmail.com"
    }, // your website email address here
      subject: `${req.body.subject}`,
    html: `<h3>You've got a new mail from ${req.body.fullname}, From MyHealth
            <p>Message:</p>
              <p>${req.body.message}</p>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;