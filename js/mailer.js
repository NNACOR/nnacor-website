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
    const serviceID = window.config.emailjs_service_id;
    const templateID = window.config.emailjs_template_id;
    emailjs.send(serviceID, templateID, params)
        .then(

            res => {
                document.getElementById('volunteer_name').value
                document.getElementById('volunteer_email').value
                document.getElementById('volunteer_message').value
                alert("Email sent!")
            })
        .catch((err) => console.log(err));
    
}