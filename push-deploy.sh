#!/bin/bash
# Deploy webcrew to ranjeetsinghai79/webcrew (CF Pages auto-deploy)
# Uses gh CLI OAuth token (ranjeetsinghai79 account, repo scope)

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TOKEN=$(gh auth token 2>/dev/null)

if [ -z "$TOKEN" ]; then
  echo "ERROR: No gh token found. Run: gh auth login"
  exit 1
fi

echo "Pushing webcrew to deploy remote (ranjeetsinghai79/webcrew)..."

GIT_TERMINAL_PROMPT=0 \
  git -C "$SCRIPT_DIR" \
  -c credential.helper="" \
  push "https://ranjeetsinghai79:${TOKEN}@github.com/ranjeetsinghai79/webcrew.git" main "$@"

echo "Done. CF Pages build triggered — check Cloudflare dashboard."
