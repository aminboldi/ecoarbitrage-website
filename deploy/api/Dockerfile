# ── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:22-slim AS builder

RUN corepack enable && corepack prepare pnpm@10 --activate

WORKDIR /app

# Workspace manifests
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig*.json ./

# Lib packages the API server depends on (api-zod, db)
COPY lib/ ./lib/

# The API artifact source
COPY artifacts/api-server/ ./artifacts/api-server/

# Stub manifests for sibling artifacts (needed for workspace resolution)
COPY artifacts/ecoarbitrage-site/package.json ./artifacts/ecoarbitrage-site/package.json
COPY artifacts/mockup-sandbox/package.json    ./artifacts/mockup-sandbox/package.json

RUN pnpm install --frozen-lockfile

ENV NODE_ENV=production
RUN pnpm --filter @workspace/api-server run build

# ── Stage 2: Run ─────────────────────────────────────────────────────────────
# esbuild bundles everything into dist/ — no node_modules needed at runtime
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/artifacts/api-server/dist ./dist

ENV PORT=3001
ENV NODE_ENV=production
# Set in Coolify:
# RESEND_API_KEY=...
# CONTACT_TO_EMAIL=amin.delshad@gmail.com
# CONTACT_FROM_EMAIL=noreply@ecoarbitrage.ir

EXPOSE 3001
CMD ["node", "--enable-source-maps", "./dist/index.mjs"]
