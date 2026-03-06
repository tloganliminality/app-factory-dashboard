# Use Node.js 18 Alpine for build
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application (creates static export in 'out' folder)
RUN npm run build

# Use nginx to serve static files
FROM nginx:alpine

# Copy static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]