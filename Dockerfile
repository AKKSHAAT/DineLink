# 1. Use Node.js for development
FROM node:20

# 2. Set the working directory
WORKDIR /app

# 3. Install pnpm globally
RUN npm install -g pnpm

# 4. Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 5. Install dependencies
RUN pnpm install

# 6. Copy the source code
COPY . .

# 7. Expose port 5173 (Vite's default port)
EXPOSE 5173

# 8. Start the development server with hot-reloading
CMD ["pnpm", "dev"]
