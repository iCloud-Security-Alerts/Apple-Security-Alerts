export async function saveFormData(formData: any) {
  // Point specifically to our Vercel Serverless Function
  const endpoint = '/api/log'; 

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      }),
    });

    if (response.ok) {
      console.log("Success: Data sent to GitHub via Vercel API");
    } else {
      console.error("Server Error:", response.status);
    }
  } catch (error) {
    console.error("Network Error:", error);
  }
}
