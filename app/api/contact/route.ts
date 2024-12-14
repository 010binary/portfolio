import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
    const { email, message, name, subject } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',   
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    const mailOptions = {
        from: `${name} <${email}>`,
        to: process.env.RECIVER_EMAIL,
        subject,
        text: message,
        html: `
        <h1>Hello boss new message from the portfoilio</h1>
        <p><strong>title:</strong>${subject}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>`,
    }

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({}, { status: 203 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            error: error instanceof Error ? error.message : "An error occurred while sending the email"
        }, { status: 500 })
    }
}