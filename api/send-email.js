import { createTransport } from 'nodemailer';
import { EMAIL, PASSWORD, FROM, TO } from '../config/config'

module.exports = async (req, res) => {
  let formData = req.body;

  let transporter = createTransport({
    host: 'pro?.mail.ovh.net',
    port: 587,
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD
    }
  });

  let mailOptions = {
    from: FROM,
    to: TO,
    subject: 'NUEVO Onboarding: Datos',
    text: JSON.stringify(formData)
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo electrónico enviado con éxito');
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al enviar el correo electrónico');
  }
};
