const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors()); // Allows your React app to talk to this server
app.use(express.json());

app.post('/log', (req, res) => {
    const logEntry = `[${new Date().toISOString()}] Data: ${JSON.stringify(req.body)}\n`;
    
    // Append the text to a file in your repo
    fs.appendFile('./activity_log.txt', logEntry, (err) => {
        if (err) {
            console.error('Failed to write to log:', err);
            return res.status(500).send('Error saving data');
        }
        console.log('Data logged to activity_log.txt');
        res.send('Success');
    });
});

app.listen(5000, () => console.log('Log server running on http://localhost:5000'));
