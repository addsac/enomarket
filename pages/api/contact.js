// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const { fullname, company_name, email, message} = req.body

    res.status(200).json({ data: 'Email inviata a ' + email + '.' })
  }
  