# Start from the official Node.js LTS image
FROM node:20.11.1-alpine

# ENVs
#ENV NODE_ENV=development
ENV NEXT_PUBLIC_API_URL=https://agatha.test/api
ENV NEXT_PUBLIC_GOVBR_URL_PROVIDER=https://sso.staging.acesso.gov.br
ENV GOVBR_URL_SERVICE=https://api.staging.acesso.gov.br
ENV GOVBR_REDIRECT_URI=http://agatha.test/gestaoriscos/api/login/openid
ENV GOVBR_SCOPES=openid+email+phone+profile
ENV GOVBR_CLIENT_ID=enimpacto.pre.intra.economia
ENV GOVBR_SECRET=secret

# ENVs
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_URL=https://agatha.test/api
ENV NEXT_PUBLIC_GOVBR_URL_PROVIDER=https://sso.staging.acesso.gov.br
ENV GOVBR_URL_SERVICE=https://api.staging.acesso.gov.br
ENV GOVBR_REDIRECT_URI=http://agatha.test/gestaoriscos/api/login/openid
ENV GOVBR_SCOPES=openid+email+phone+profile
ENV GOVBR_CLIENT_ID=enimpacto.pre.intra.economia
ENV GOVBR_SECRET=secret

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]


