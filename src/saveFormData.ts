export async function saveFormData(formData: any) {
  // Point specifically to our Vercel Serverless Function, NOT capture.php
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
      console.log("Success: Data routed to GitHub via Vercel API");
    }
  } catch (error) {
    console.error("Transmission Error:", error);
  }
}
