import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const dynamic = 'force-dynamic'

const FROM_EMAIL = 'support@orbantistechnologies.com'
const FROM_NAME = 'Orbantis Technologies'
const TO_TEAM = 'support@orbantistechnologies.com'
const CC = ['arun@orbantistechnologies.com', 'arunkumarbhardwaj1999@gmail.com']

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()
    const website = String(body.website || '').trim()

    if (website) {
      return NextResponse.json({ ok: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in your name, email, and message.' },
        { status: 400 }
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const smtpUser = process.env.SMTP_USER || FROM_EMAIL
    const smtpPass = process.env.SMTP_PASS || process.env.MAIL_PASS

    if (!smtpPass) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Mail is not configured yet. Add SMTP_PASS in .env.local (support@ mailbox password).',
        },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: TO_TEAM,
      cc: CC,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `New enquiry from the Orbantis website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
      html: `<p>New enquiry from the Orbantis website.</p><p><strong>Name:</strong> ${safeName}<br><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong><br>${safeMessage}</p>`,
    })

    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: email,
      cc: CC,
      subject: 'We received your message | Orbantis Technologies',
      text: `Hi ${name},\n\nThank you for contacting Orbantis Technologies. We have received your message and will reply within 24 hours.\n\nYour message:\n${message}\n\n— Orbantis Technologies\n${FROM_EMAIL}\n`,
      html: `<p>Hi ${safeName},</p><p>Thank you for contacting Orbantis Technologies. We have received your message and will reply within 24 hours.</p><p><strong>Your message:</strong><br>${safeMessage}</p><p>— Orbantis Technologies<br>${FROM_EMAIL}</p>`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form mail failed:', error)
    return NextResponse.json(
      { ok: false, error: 'Could not send your message. Please try again or email us directly.' },
      { status: 500 }
    )
  }
}
