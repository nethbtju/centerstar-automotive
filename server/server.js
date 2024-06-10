import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const resend = new Resend(process.env.REACT_APP_API_KEY_TEST);

app.post('/send-email', async (req, res) => {
  const { from, to, subject, html } = req.body;

  try {
    const result = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
