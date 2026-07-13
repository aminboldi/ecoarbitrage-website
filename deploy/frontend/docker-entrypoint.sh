#!/bin/sh
set -e

# Substitute only ${API_URL} in the nginx template, leaving nginx's own
# $variables ($host, $uri, etc.) untouched.
envsubst '$API_URL' \
  < /etc/nginx/templates/default.conf.template \
  > /etc/nginx/http.d/default.conf

exec "$@"
