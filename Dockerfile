FROM node:20.12.2-alpine3.19 AS base

EXPOSE ${VITE_FRONTEND_PORT}

ENV NODE_ENV "development"

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY ./package.json ./pnpm-lock.yaml ./

RUN  cd /usr/src/app && pnpm install

COPY . .

CMD ["pnpm", "dev"]