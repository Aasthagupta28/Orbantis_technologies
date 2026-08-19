import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

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

function smtpConfig() {
  const pass = (
    process.env.SMTP_PASS ||
    process.env.SMTP_PASSWORD ||
    process.env.MAIL_PASS ||
    ''
  ).trim()

  const port = Number(process.env.SMTP_PORT || 587)

  return {
    host: (process.env.SMTP_HOST || 'smtp.hostinger.com').trim(),
    port,
    user: (process.env.SMTP_USER || FROM_EMAIL).trim(),
    pass,
  }
}

function createTransport() {
  const { host, port, user, pass } = smtpConfig()

  const options: SMTPTransport.Options = {
    host,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,
  }

  return nodemailer.createTransport({
    ...options,
    family: 4,
  } as SMTPTransport.Options)
}

export async function GET() {
  const { host, port, user, pass } = smtpConfig()
  return NextResponse.json({
    smtpHost: host,
    smtpPort: port,
    smtpUserSet: Boolean(user),
    smtpPassSet: Boolean(pass),
  })
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

    const { pass } = smtpConfig()
    if (!pass) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Mail is not configured on Vercel. Add SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASS, then Redeploy.',
        },
        { status: 500 }
      )
    }

    const transporter = createTransport()
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>')

    await Promise.all([
      transporter.sendMail({
        from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
        to: TO_TEAM,
        cc: CC,
        replyTo: email,
        subject: `New contact form message from ${name}`,
        text: `New enquiry from the Orbantis website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
        html: `<p>New enquiry from the Orbantis website.</p><p><strong>Name:</strong> ${safeName}<br><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong><br>${safeMessage}</p>`,
      }),
      transporter.sendMail({
        from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
        to: email,
        cc: CC,
        subject: 'We received your message | Orbantis Technologies',
        text: `Hi ${name},\n\nThank you for contacting Orbantis Technologies. We have received your message and will reply within 24 hours.\n\nYour message:\n${message}\n\n— Orbantis Technologies\n${FROM_EMAIL}\n`,
        html: `<p>Hi ${safeName},</p><p>Thank you for contacting Orbantis Technologies. We have received your message and will reply within 24 hours.</p><p><strong>Your message:</strong><br>${safeMessage}</p><p>— Orbantis Technologies<br>${FROM_EMAIL}</p>`,
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form mail failed:', error)
    const messageText = error instanceof Error ? error.message : ''
    const code =
      error && typeof error === 'object' && 'code' in error
        ? String((error as { code?: string }).code)
        : ''

    let friendly = 'Could not send your message. Please try again or email us directly.'
    if (/invalid login|authentication|EAUTH/i.test(`${code} ${messageText}`)) {
      friendly =
        'Mail login failed. SMTP_USER must be support@orbantistechnologies.com and SMTP_PASS must be that mailbox password (no quotes).'
    } else if (/timeout|connect|ENOTFOUND|ECONNECTION|ESOCKET|ETIMEDOUT/i.test(`${code} ${messageText}`)) {
      friendly =
        'Vercel could not reach the mail server. Set SMTP_HOST=smtp.hostinger.com and SMTP_PORT=587, then Redeploy. If Hostinger uses Titan, set SMTP_HOST=smtp.titan.email.'
    }

    return NextResponse.json({ ok: false, error: friendly }, { status: 500 })
  }
}
