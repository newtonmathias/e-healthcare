import nodemailer from 'nodemailer';

const sendEmail = async options => {

    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "a72eca2133db85",
            pass: "24164bdf7b2a89"
        }
    });

    const message = {
        from: "no-reply@myhealth.com",
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(message)

}

export default sendEmail;