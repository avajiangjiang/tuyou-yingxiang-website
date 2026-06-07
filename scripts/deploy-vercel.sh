#!/bin/bash
set -euo pipefail
DEPLOY_ENDPOINT="https://codex-deploy-skills.vercel.sh/api/deploy"
INPUT_PATH="${1:-.}"
TEMP_DIR=$(mktemp -d)
TARBALL="$TEMP_DIR/project.tgz"
STAGING_DIR="$TEMP_DIR/staging"
cleanup() { rm -rf "$TEMP_DIR"; }
trap cleanup EXIT
PROJECT_PATH=$(cd "$INPUT_PATH" && pwd)
mkdir -p "$STAGING_DIR"
tar -C "$PROJECT_PATH" \
  --exclude='node_modules' \
  --exclude='.git' \
  --exclude='.next' \
  --exclude='out' \
  --exclude='.env' \
  --exclude='.env.*' \
  --exclude='.vercel' \
  -cf - . | tar -C "$STAGING_DIR" -xf -
tar -czf "$TARBALL" -C "$STAGING_DIR" .
echo "Package size: $(du -h "$TARBALL" | cut -f1)" >&2
RESPONSE=$(curl -s -X POST "$DEPLOY_ENDPOINT" -F "file=@$TARBALL" -F "framework=nextjs")
echo "$RESPONSE"
