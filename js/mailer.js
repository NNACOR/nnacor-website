/*
using Elastic email JS for sending emails

Author: Volan Nnanpalle
*/


async function sendEmail() {
    let volunteer_email = document.getElementById('volunteer_email').value
    let volunteer_name = document.getElementById('volunteer_name').value
    let subject = 'New Volunteer Request message from NNACOR Website from: ' + volunteer_name
    let volunteer_message = document.getElementById('volunteer_message').value

    let body = `
    Hello,<br><br>

    <h4>Volunteer's Name: </h4>${volunteer_name}
    <br>
    <h4>Volunteer's Email: </h4>${volunteer_email}
    <br>
    <h4>Volunteer's Message: </h4>${volunteer_message}
    `;
    
    //inside async function
    const message = await window.Email.send({
        SecureToken: "7f2bb0a1-4e31-4eeb-b429-a4fbd51dbca5",
        To: 'nnacorarayoflight@gmail.com',
        From: 'nnacorarayoflight@gmail.com',
        Subject: subject,
        Body: body
    });
    if (message === "OK") {

        alert('Email Sent!')
    }

}