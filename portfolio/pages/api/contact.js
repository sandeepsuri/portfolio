import nodemailer from "nodemailer"

export default async function ContactAPI(req, res) {
    const { name, email, message } = req.body
    const user = process.env.G_EMAIL

    const data = { name, email, message }
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.G_PASS
        }
    })

    try {
        const mail = await transport.sendMail({
            from: email,
            to: user,
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
            `
        })
        console.log("Message sent: ", mail.messageId)
        return res.status(200).json({ message: "success" })
    } 
    catch (e){
        console.log(e)
        res.status(500).json({ message: "Could not send message, please try again."})
    }

}