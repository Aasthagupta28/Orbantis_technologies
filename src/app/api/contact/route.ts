import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type SMTPTransport from 'nodemailer/lib/smtp-transport'

export const dynamic = 'force-dynamic'

const FROM_EMAIL = 'support@orbantistechnologies.com'
const FROM_NAME = 'Orbantis Technologies'
const TO_TEAM = 'support@orbantistechnologies.com'
const CC = ['arun@orbantistechnologies.com']

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function emailLayout(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(12,74,110,0.08);">
          <tr>
            <td style="background:linear-gradient(90deg,#0066cc,#00bfff);padding:28px 32px;text-align:left;">
              <p style="margin:0;color:#ffffff;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Orbantis Technologies</p>
              <h1 style="margin:8px 0 0;color:#ffffff;font-size:24px;line-height:1.3;">${title}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid #e2e8f0;background:#f8fafc;">
              <p style="margin:0 0 6px;color:#0c4a6e;font-size:14px;font-weight:bold;">Orbantis Technologies</p>
              <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;">
                Web, Mobile &amp; AI Development<br />
                <a href="mailto:support@orbantistechnologies.com" style="color:#0066cc;text-decoration:none;">support@orbantistechnologies.com</a>
                &nbsp;·&nbsp;
                <a href="https://orbantistechnologies.com" style="color:#0066cc;text-decoration:none;">orbantistechnologies.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function teamEmailHtml(name: string, email: string, message: string) {
  return emailLayout(
    'New website enquiry',
    `
      <p style="margin:0 0 20px;color:#334155;font-size:16px;line-height:1.6;">
        A new message was submitted from the Orbantis contact form.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;">
        <tr>
          <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;">
            <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.6px;">Name</p>
            <p style="margin:0;color:#0c4a6e;font-size:16px;font-weight:bold;">${name}</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 20px;border-bottom:1px solid #e2e8f0;">
            <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.6px;">Email</p>
            <p style="margin:0;"><a href="mailto:${email}" style="color:#0066cc;font-size:16px;text-decoration:none;">${email}</a></p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 20px;">
            <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.6px;">Message</p>
            <p style="margin:0;color:#334155;font-size:15px;line-height:1.7;">${message}</p>
          </td>
        </tr>
      </table>
      <p style="margin:24px 0 0;color:#64748b;font-size:13px;">Reply to this email to respond directly to the sender.</p>
    `
  )
}

function visitorEmailHtml(name: string, message: string) {
  return emailLayout(
    'We received your message',
    `
      <p style="margin:0 0 16px;color:#334155;font-size:16px;line-height:1.6;">Hi ${name},</p>
      <p style="margin:0 0 24px;color:#334155;font-size:16px;line-height:1.6;">
        Thank you for contacting <strong>Orbantis Technologies</strong>. We have received your message and will get back to you within 24 hours.
      </p>
      <p style="margin:0 0 8px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.6px;">Your message</p>
      <div style="background:#f8fafc;border-left:4px solid #0066cc;border-radius:8px;padding:16px 18px;color:#334155;font-size:15px;line-height:1.7;">
        ${message}
      </div>
      <p style="margin:28px 0 0;">
        <a href="https://orbantistechnologies.com" style="display:inline-block;background:#0066cc;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:bold;">Visit our website</a>
      </p>
    `
  )
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
        html: teamEmailHtml(safeName, safeEmail, safeMessage),
      }),
      transporter.sendMail({
        from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
        to: email,
        cc: CC,
        subject: 'We received your message | Orbantis Technologies',
        text: `Hi ${name},\n\nThank you for contacting Orbantis Technologies. We have received your message and will reply within 24 hours.\n\nYour message:\n${message}\n\n— Orbantis Technologies\n${FROM_EMAIL}\n`,
        html: visitorEmailHtml(safeName, safeMessage),
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
