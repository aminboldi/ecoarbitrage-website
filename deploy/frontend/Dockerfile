# ── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:22-slim AS builder

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

# Workspace manifests first for better layer caching
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig*.json ./

# Copy every package.json in the workspace so pnpm can resolve the lockfile
COPY lib/                              ./lib/
COPY artifacts/ecoarbitrage-site/      ./artifacts/ecoarbitrage-site/
# Stub manifests for sibling artifacts (needed for workspace resolution)
COPY artifacts/api-server/package.json    ./artifacts/api-server/package.json
COPY artifacts/mockup-sandbox/package.json ./artifacts/mockup-sandbox/package.json

RUN pnpm install --frozen-lockfile

# Vite requires PORT and BASE_PATH at build time only
ENV NODE_ENV=production
ENV BASE_PATH=/
ENV PORT=3000

RUN pnpm --filter @workspace/ecoarbitrage-site run build

# ── Stage 2: Serve ───────────────────────────────────────────────────────────
# nginx listens on port 80 — set Coolify service port to 80
FROM nginx:1.27-alpine

COPY --from=builder /app/artifacts/ecoarbitrage-site/dist/public /usr/share/nginx/html
COPY deploy/frontend/nginx.conf /etc/nginx/templates/default.conf.template
COPY deploy/frontend/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Override in Coolify with the internal URL of your API service
ENV API_URL=http://api:3001

# nginx listens on port 80 — configure Coolify port as 80, not 3000
EXPOSE 80
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
