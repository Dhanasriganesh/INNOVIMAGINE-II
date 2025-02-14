import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
 
const app = express();
const port = process.env.PORT || 5000;
 
// Middleware
app.use(cors());
app.use(bodyParser.json());
 
// Route to handle form submission
app.post('/send-email', async (req, res) => {
  const { fullName, email, service, message } = req.body;
 
  // Create a transporter using your email provider details
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Gmail service or you can use another service
    auth: {
      user: 'groupartihcus@gmail.com', // Your email (sender)
      pass: 'sgam fzkj myvd ycxv', // Your Gmail app password (do not use your regular password)
    },
  });
 
  // Email options
  let mailOptions = {
    from: email, // sender address
    to: 'innovimagine@gmail.com', // Your business email
    subject: `Consultation Request from ${fullName}`, // Subject line
    text: `
      You have a new consultation request.
      \n\nFull Name: ${fullName}
      \nEmail: ${email}
      \nService of Interest: ${service}
      \nMessage: ${message}
    `, // Plain text body
  };
 
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error sending email', error });
  }
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
 