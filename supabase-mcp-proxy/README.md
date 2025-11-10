# Supabase MCP Proxy (Netlify + GitHub)

A simple Netlify Function that acts as a proxy between Claude and Supabase MCP, injecting your Supabase **Service Role Key** securely via environment variables.

## ?? Deploy Steps
1. Create a new GitHub repo and upload this folder.
2. Go to Netlify ? Import from GitHub.
3. Add your Supabase key as SUPABASE_SERVICE_ROLE_KEY.
4. Deploy and use your proxy URL.
