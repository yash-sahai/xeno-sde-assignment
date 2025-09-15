FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# For NestJS, use start:dev if you want hot reload in dev
CMD ["npm", "run", "start:dev"]
