# Use Node.js 18 Alpine
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose the port that Railway assigns
EXPOSE $PORT

# Set environment to production
ENV NODE_ENV=production

# Start the application (Railway sets PORT automatically)
CMD ["npm", "start"]