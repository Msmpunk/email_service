const nodemailer = require("nodemailer");

export async function sentEmail(req, res){
    try {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "codevstackcom@gmail.com",
              pass: "santaflowyporta4",
              
            },
          });
          console.log("🚀 ~ file: email_servise.js ~ line 11 ~ sentEmail ~ REACT_APP_EMAIL_PASS", process.env.REACT_APP_EMAIL_PASS)
          let mailOptions = {
            from: 'codevstackcom@gmail.com',
            to: "msm0102712@gmail.com",
            subject: `HOLA QLO`,
            html: `The body of the email goes here in HTML`,
          };
          
          transporter.sendMail(mailOptions, function (err, info) {
            console.log("🚀 ~ file: email_servise.js ~ line 23 ~ info", info)
            if (err) {
                return res.status(400).send({
                    status: false,
                    message: err
                })
            } else {
              res.json(info);
                return res.status(200).send({
                    status: true,
                    message: info
                })
            }
          });


        
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: 'Hay un error en el servidor',
            error: error
        })
    }
}