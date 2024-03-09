const Mailjet = require('node-mailjet');
const he = require('he');

exports.handler = async function sendEmailHandler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const params = JSON.parse(event.body);

  // Sanitize user input to limit XSS attacks
  const sanitizedUserName = he.encode(params.userName);
  const sanitizedUserEmail = he.encode(params.userEmail);
  const sanitizedUserMessage = he.encode(params.userMessage);

  const mailjet = Mailjet.apiConnect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_PRIVATE_KEY);

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: { Email: 'romainparisot.pro@gmail.com', Name: sanitizedUserName },
        To: [{ Email: 'romainparisot.pro@gmail.com', Name: 'Romain PARISOT adress reception' }],
        Subject: `MailJet - ${sanitizedUserName} sent you a message from your portfolio website!`,
        TextPart: `Client Email - ${sanitizedUserEmail} Client Message - ${sanitizedUserMessage}`,
      },
    ],
  });

  return request
    .then(() => ({ statusCode: 200, body: 'Email sent' }))
    .catch(() => ({
      statusCode: 500,
      body: 'Error sending email',
    }));
};
