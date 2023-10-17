/*
using Email JS for sending emails

Author: Volan Nnanpalle
*/

function sendEmail() {
    var params = {
        name: document.getElementById('volunteer_name').value,
        email: document.getElementById('volunteer_email').value,
        message: document.getElementById('volunteer_message').value
    };
    const serviceID = 'service_38s65kd'
    const templateID = 'template_7kic30b'
    console.log('test')
    emailjs.send(serviceID, templateID, params)
        .then(

            res => {
                document.getElementById('volunteer_name').value
                document.getElementById('volunteer_email').value
                document.getElementById('volunteer_message').value

                console.log(res)
                alert("Email sent!")
            })
        .catch((err) => console.log(err));
}