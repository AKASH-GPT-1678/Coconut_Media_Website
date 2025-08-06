FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
# RUN npm install next

COPY src/ ./src/
COPY components.json/ ./
COPY next.config.ts ./
COPY next-env.d.ts ./
COPY eslint.config.mjs ./
COPY postcss.config.mjs ./
COPY tsconfig.json ./

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]
