import nodemailer from 'nodemailer';

export const mailer = nodemailer.createTransport(process.env.SMTP_URL);
