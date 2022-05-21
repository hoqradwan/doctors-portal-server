/* 
// ............................................
// MailChimp
mailchimp.setConfig({
  apiKey: process.env.EMAIL_SENDER_KEY,
  server: 'us6',

}); */
// server: 'https://us6.api.mailchimp.com/3.0/322783f5b4',
/* async function callPing() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

callPing();
 */


// ..................................
// Node mailer
/* async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "hmdradwanul@gmail.com",
      port: 5000,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "hmdradwanul@gmail.com", // generated ethereal user
        pass: "bigbang123#", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
 */


  // .......................................................
  // final
  /* 
  
  let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.USER_PASS,
  },
});

function sendAppointmentEmail(booking) {
  const { patient, patientName, treatment, date, slot } = booking;

  var email = {
    from: "hmdradwanul@gmail.com",
    to: patient,
    subject: `Your Appointment for ${treatment} is on ${date} at ${slot} is Confirmed`,
    text: `Your Appointment for ${treatment} is on ${date} at ${slot} is Confirmed`,
    html: `
      <div>
        <p> Hello ${patientName}, </p>
        <h3>Your Appointment for ${treatment} is confirmed</h3>
        <p>Looking forward to seeing you on ${date} at ${slot}.</p>
        
        <h3>Our Address</h3>
        <p>Andor Killa Bandorban</p>
        <p>Bangladesh</p>
        <a href="https://web.programming-hero.com/">unsubscribe</a>
      </div>
    `,
  };

  transporter.sendMail(email, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Message sent: ", data);
    }
  });
}
  */