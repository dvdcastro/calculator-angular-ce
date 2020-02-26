#!/bin/bash

# Package es2015 package.
cat ./dist/calculator/runtime-es2015.js \
./dist/calculator/polyfills-es2015.js \
./dist/calculator/main-es2015.js > ce.js

echo "Packaged es2015 project into ce.js"

# Package es5 package.
cat ./dist/calculator/runtime-es5.js \
./dist/calculator/polyfills-es5.js \
./dist/calculator/main-es5.js > ce-es5.js

echo "Packaged es5 project into ce-es5.js"
