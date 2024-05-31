//Type: node sendEmailTest.js in this directory to send email. Change "to" to change target reciepient

import { Resend } from 'resend';

const resend = new Resend('re_g7ycotyG_BbYkHXBThZwWTKGUKEZ4QL3d');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'rohitvalanki@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});