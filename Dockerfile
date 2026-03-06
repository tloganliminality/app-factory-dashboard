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

# Install envsubst for environment variable substitution
RUN apk add --no-cache gettext

# Copy static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx config template
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose the port that Railway assigns
EXPOSE $PORT

# Start nginx with environment variable substitution
CMD ["sh", "-c", "envsubst '$$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]