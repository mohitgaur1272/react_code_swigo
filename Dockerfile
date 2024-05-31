
# Use an official Node.js image as the base image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Build the application
#RUN npm run build

# Expose port 80 to the outside world
#EXPOSE 80

# Command to run the application
CMD ["npm", "run", "dev"]

