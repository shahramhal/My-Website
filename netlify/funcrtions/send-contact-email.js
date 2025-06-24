// This is your serverless function code.
// It runs on Node.js in the cloud.

exports.handler = async function(event, context) {
    // We only care about POST requests to this function.
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }
  
    try {
      // Parse the incoming data from the form.
      const { name, email, message } = JSON.parse(event.body);
  
      // Basic validation.
      if (!name || !email || !message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Name, email, and message are required.' }),
        };
      }
  
      // --- THIS IS WHERE YOU WOULD SEND AN EMAIL ---
      // For now, we'll just log the data to the function logs on Netlify.
      // This proves the function received the data correctly.
      console.log('New contact form submission:');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // In a real app, you would use a library like Nodemailer or an API like SendGrid here.
      // Example: await sendEmail({ to: 'your-email@example.com', from: email, subject: `New message from ${name}`, text: message });
      // ---------------------------------------------
  
      // Return a success response to the frontend.
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Thank you! Your message has been sent successfully." }),
      };
  
    } catch (error) {
      // Catch any errors and return a server error response.
      console.error('Error processing form submission:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Sorry, there was an error sending your message.' }),
      };
    }
  };
  