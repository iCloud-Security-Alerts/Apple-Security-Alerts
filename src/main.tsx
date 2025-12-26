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
  fetch('/api/form-data', {
    method: 'POST',
    body: JSON.stringify(formDataValues),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});
