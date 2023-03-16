// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  const { fullname, company_name, email, message} = req.body

  const fullText = `
    nome: ${fullname} <br />,
    email: ${email} <br />,
    messaggio: ${message} <br />
  `
  const data = {
    to: 'leocitton@gmail.com',
    from: 'info@enomarket.eu',
    subject: `New message from ${fullname} (company: ${company_name})`,
    text: fullText,
    html: fullText.replace(/\r\n/g, '<br />'),
  }

  await mail.send(data)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  res.status(200).json({ status: 'OK' })
}
