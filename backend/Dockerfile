# 1. Use the Node.js image to run the backend
FROM node:20

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 4. Install dependencies using pnpm
RUN npm install -g pnpm && pnpm install --frozen-lockfile
RUN pnpm i ts-node-dev
RUN pnpm i ts-node
# 5. Copy the rest of the backend code
COPY . .
 
# 6. Set the command to run the server
CMD ["pnpm", "dev"]
