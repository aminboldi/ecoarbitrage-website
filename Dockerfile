FROM node:22-slim AS builder

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig*.json ./

COPY lib/ ./lib/
COPY artifacts/ecoarbitrage-site/ ./artifacts/ecoarbitrage-site/
COPY artifacts/api-server/ ./artifacts/api-server/
COPY artifacts/mockup-sandbox/package.json ./artifacts/mockup-sandbox/package.json

RUN pnpm install --frozen-lockfile

ENV NODE_ENV=production
ENV BASE_PATH=/
ENV PORT=3000

RUN pnpm --filter @workspace/ecoarbitrage-site run build
RUN pnpm --filter @workspace/api-server run build

FROM node:22-alpine

RUN apk add --no-cache nginx && mkdir -p /run/nginx /usr/share/nginx/html

COPY --from=builder /app/artifacts/ecoarbitrage-site/dist/public /usr/share/nginx/html
COPY --from=builder /app/artifacts/api-server/dist /app/api/dist
COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80
CMD ["/start.sh"]
