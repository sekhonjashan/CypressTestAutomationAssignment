# Use the official Cypress base image
FROM cypress/base:16.13.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Run Cypress tests
CMD ["npm", "run", "cypress:run"]
