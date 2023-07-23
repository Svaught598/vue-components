#!/bin/bash
set -e

# Build
rm -rf dist
mkdir dist

npx vite build
cp -R ./src/themes/ ./dist/themes/

# Build Static
rm -rf dist-static
mkdir dist-static

npx storybook build --disable-telemetry --output-dir dist-static

cp -R ./dist ./dist-static
cp -R ./src/prebuilt ./dist-static

npx netlify deploy --dir=./dist-static --site=components.gamehook.io --prod --open