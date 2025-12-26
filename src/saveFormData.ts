export async function saveFormData(formData: any) {
  try {
    const response = await fetch('http://localhost:5000/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Form data logged successfully to local file!');
    }
  } catch (error) {
    console.error('Error sending data to log server:', error);
  }
}
