const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');


const signup = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
        tls: {
            ciphers: 'SSLv3',
          },
    });

    let message = {
        from: 'sara@example.com', 
        to: "bar@example.com, baz@example.com", 
        subject: "Hello ✔", 
        text: "Successfully Register with us.", 
        html: "<b>Correo recibido</b>", 
      }

      let info = await transporter.sendMail(message)


    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({ 
            msg: "Correo recibido",
            info : info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

}

/** send mail from real gmail account */
const getbill = (req, res) => {

    const dataEmail = req.body;

    let config = {
        service : 'gmail',
        auth : {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product : {
            name: "Sara's Spa",
            link : 'https://localhost:3000/'
        }
    })



    let response = {
        body: {
            name : "Sara's Spa",
            greeting: "Un cordial salud!",
            title: "Somos Sara's Spa",
            intro: "Recibimos tu reservacion!",
            table : {
                data : [
                    {
                        hora: dataEmail.hour,
                        servicio: dataEmail.service,
                        precio : dataEmail.price,
                    }
                ]
            },
            outro: "Estamos para servirte!"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : process.env.EMAIL,
        to : dataEmail.email,
        subject: "Reservacion",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("getBill Successfully...!");
}


module.exports = {
    signup,
    getbill
} 