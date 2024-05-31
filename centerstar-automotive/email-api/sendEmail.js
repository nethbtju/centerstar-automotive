import { Resend } from 'resend';

const resend = new Resend('re_NQRHtyHR_KVgn5XFwz1d54ixz6nvXYpJZ');

resend.emails.send({
  from: 'centerstar-inquiries@resend.dev',
  to: 'rohitvalanki@gmail.com',
  subject: 'Hello Toebean',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});