const nodemailer = require("nodemailer");

export async function sentEmail(req, res){
    try {

        const { name, email, message } = req.body
    
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: "codevstackcom@gmail.com",
              pass: "santaflowyporta4",
              
            },
          });
          let mailOptions = {
            from: `${email}`,
            to: "msm0102712@gmail.com",
            subject: `${name}`,
            html: `${message}  ${email}`,
          };
          
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                return res.status(400).send({
                    status: false,
                    message: err
                })
            } else {
                return res.status(200).send({
                    status: true,
                    message: "done"
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