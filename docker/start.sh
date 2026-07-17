#!/bin/sh
set -e

PORT=8080 node /app/api/dist/index.mjs &
exec nginx -g "daemon off;"
