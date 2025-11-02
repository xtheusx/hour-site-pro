
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let appointments = [];

app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

app.post('/api/appointments', (req, res) => {
  const { day, hour, name, email } = req.body;
  if (!day || !hour || !name || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newAppointment = { day, hour, name, email };
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
