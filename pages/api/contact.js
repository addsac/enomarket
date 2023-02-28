// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
    const { fullname, company_name, email, message} = req.body

    const data = {
      to: 'info@enomarket.eu',
      from: 'pegasodigitalstudio@gmail.com',
      subject: `New message from ${fullname} (company: ${company_name}) - ${email}`,
      text: message,
      html: fullText.replace(/\r\n/g, '<br />'),
    }

    await mail.send(data)
        .catch((err) => console.log(err.response.body))

    res.status(200).json({ status: 'OK' })
  }
  