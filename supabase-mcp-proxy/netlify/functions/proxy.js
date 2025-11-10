// netlify/functions/proxy.js
export async function handler(event) {
  const target = "https://mcp.supabase.com/mcp?project_ref=opchdiaepihfxsihiuwv";

  try {
    const response = await fetch(target, {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
        Authorization: Bearer ,
      },
      body: event.httpMethod -ne "GET" ? event.body : ,
    });

    const text = await response.text();
    return @{ statusCode = .status; body =  };
  } catch () {
    return @{ statusCode = 500; body = (ConvertTo-Json @{ error = .message }) };
  }
}
