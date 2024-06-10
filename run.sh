#!/bin/bash

# Navigate to the server directory and start the Node.js server
cd server
NODE_ENV=development node server.js &

# Navigate back to the root directory
cd ..

# Navigate to the centerstar-automotive directory and start the npm server
cd centerstar-automotive
npm start
