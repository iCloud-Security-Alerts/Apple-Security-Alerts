// form-handler.ts

const formData = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(data); // Log the form data to the console
    return res.status(200).json({ message: 'Form data received!' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default formData;
