export async function handler(event) {
  // REST endpoint for your project
  const targetBase = "https://opchdiaepihfxsihiuwv.supabase.co/rest/v1";

  // Support query path forwarding, e.g. ?path=users
  const path = event.queryStringParameters?.path || "";
  const target = `${targetBase}/${path}`;

  try {
    const response = await fetch(target, {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
      },
      body: event.httpMethod !== "GET" && event.body ? event.body : undefined,
    });

    const text = await response.text();
    return {
      statusCode: response.status,
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
