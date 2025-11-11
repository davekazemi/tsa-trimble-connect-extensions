#!/bin/bash

# Bash script to build React extension and copy to public resources

echo "Building React Extension..."

# Navigate to React folder
cd HelloWorld-React

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the app
echo "Building app..."
npm run build

# Navigate back to root
cd ..

# Create destination folder if it doesn't exist
mkdir -p public/resources/HelloWorld-React

# Copy dist files to public resources
echo "Copying built files to public resources..."
cp -r HelloWorld-React/dist/* public/resources/HelloWorld-React/

echo "Build complete! Files copied to public/resources/HelloWorld-React"
echo "Next steps:"
echo "1. git add public/resources/HelloWorld-React/"
echo "2. git commit -m 'Update React extension build'"
echo "3. git push"

