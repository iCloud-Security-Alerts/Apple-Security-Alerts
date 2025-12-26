import express from 'express';
import config from './config';

const app = express();
app.use(express.json()); // Parse incoming request bodies as JSON

app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log(formData);
  saveFormData(formData);
  res.send('Form submitted successfully!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
