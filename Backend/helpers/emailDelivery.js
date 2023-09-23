import nodemailer from 'nodemailer'
const emailDeliveryAuth = async (data) => {
    const { name, email, token } = data
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "226d2adcc7b002",
            pass: "98a2ebeba4acd3"
        }
    });
    console.log(data)
    const info = await transport.sendMail({
        from: `"${name} 👻" ${email}`, // sender address
        to: email, // list of receivers
        subject: `Confirmacion de cuenta CS-Task ✔`, // Subject line
        text: "Confirmacion de cuenta?", // plain text body
        html: `<p>Hola ${name} bienvenido a CS-Task</p>
        <p>Tu cuenta ya casi esta lista solo debes comprobarla con el siguiente enlace:</p>
        <a href="${process.env.FRONTEND_URL}/confirm/${token}">Confirmar</a>
        <p>IGNORA ESTE MENSAJE SI NO RECONOCES ESTA INTERACCION</p>`, // html body
    })
}

export {
    emailDeliveryAuth
}