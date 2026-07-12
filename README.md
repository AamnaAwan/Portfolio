# Portfolio

## Deployment note

The frontend and backend deploy separately.

- The Vite frontend is deployed via Firebase Hosting.
- The contact form backend is deployed as a Firebase Cloud Function.
- The production frontend reads the backend URL from .env.production via VITE_API_URL.

If the backend URL changes, update VITE_API_URL in .env.production and redeploy the hosting site.

## Backend deployment

1. Set the Gmail environment variables for the Firebase Functions project:
   - GMAIL_USER
   - GMAIL_APP_PASSWORD
2. Deploy the functions:
   - firebase deploy --only functions
3. Deploy the frontend:
   - npm run build
   - firebase deploy --only hosting

