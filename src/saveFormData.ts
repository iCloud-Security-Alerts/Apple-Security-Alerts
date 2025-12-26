export async function saveFormData(formData: any) {
  // Detect if we are running locally or on Vercel
  const isLocal = window.location.hostname === 'localhost';
  const endpoint = isLocal 
    ? 'http://localhost:5000/log' 
    : '/api/log';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log(`Successfully logged to ${isLocal ? 'Local' : 'Vercel'} Sink`);
    }
  } catch (error) {
    console.error('Logging Error:', error);
  }
}
