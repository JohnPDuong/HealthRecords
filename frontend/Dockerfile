# Determines the environment
# This environment is good due to small size
FROM node:16-alpine

# Working directory set here
# If it does not exist, it will be created
WORKDIR /app

# Copy and download packages
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

# Copy into image
COPY . ./

EXPOSE 3000

# Commands to run
CMD ["npm", "start"]