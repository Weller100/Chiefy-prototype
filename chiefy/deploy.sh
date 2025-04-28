#!/bin/bash
# Build the Next.js application
npm run build

# Start the Next.js application in production mode
# The -H 0.0.0.0 flag binds to all network interfaces
npx next start -H 0.0.0.0 -p 3000