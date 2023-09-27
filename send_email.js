function sendEmail() {
    Email.send({
    Host: "smtp.hotmail.com",
    Username: "volankang@hotmail.com",
        Password: "thetennisvon=2018",
    To: 'volankang@gmail.com',
    From: "volankang@hotmail.com.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
    })
    .then(function (message) {
        alert("mail sent successfully")
    });
}