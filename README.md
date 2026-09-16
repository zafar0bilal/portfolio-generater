# AI Portfolio Generator

## Run locally

1. Install Node.js.
2. Run:
   npm install
   npm run dev

## Vercel deployment

1. Import this project into Vercel.
2. Add an environment variable:
   GEMINI_API_KEY = your Google AI Studio API key
3. Redeploy.

The API key is used only by `/api/generate.js`, not exposed in the browser.

## Reference images

Users can upload a PNG/JPG/WEBP screenshot. The AI analyzes the visual direction and generates original portfolio content. It is intentionally not a pixel-for-pixel copier of another website.
