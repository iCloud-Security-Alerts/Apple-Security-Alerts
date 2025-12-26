import { Pool } from 'pg';

const db = new Pool(config.env.DATABASE_URL);

function saveFormData(formData) {
  // Connect to your database here...
  const query = 'INSERT INTO form_data (name, email) VALUES ($1, $2)';
  db.query(query, [formData.name, formData.email], (err, result) => {
    if (err) console.error(err);
    else console.log(`Form data saved successfully!`);
  });
}
