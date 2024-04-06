// import nodemailer, { TransportOptions } from "nodemailer";
const nodemailer = require('nodemailer');
interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

const transporterConfigs = {
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // SMTP settings here
    ...transporterConfigs,
  });
  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `himanshu0914sharma@gmail.com`,
      to: `as3965989@gmail.com`,
      subject: "Mirror Social | Contact Message",
      html: `<p>Email from: ${email}</p><p>${name} reached out via Mirror Social and has this to say: <i>${message}</i></p><p>Mirror Social | https://www.mirrorsocial.in</p>`,
    });
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
