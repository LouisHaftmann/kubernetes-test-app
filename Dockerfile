FROM node:24-alpine as builder

WORKDIR /app

ENV CI=true

COPY . .

RUN npm install -g pnpm@latest-10

RUN pnpm install

RUN pnpm build

FROM node:24-alpine

WORKDIR /app

COPY --from=builder /app/.output /app/.output

CMD ["node", ".output/server/index.mjs"]