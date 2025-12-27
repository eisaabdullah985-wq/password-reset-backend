import axios from "axios";

const sendEmail = async ({ email, subject, message }) => {
  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "SecureAuth",
          email: process.env.EMAIL_FROM,
        },
        to: [
          {
            email: email,
          },
        ],
        subject: subject,
        textContent: message,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(
      "Brevo email error:",
      error.response?.data || error.message
    );
    throw new Error("Email sending failed");
  }
};

export default sendEmail;
