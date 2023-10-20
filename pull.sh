#!/bin/bash

# Navigate to the root directory of your monorepo
cd /var/www/html/monorepo/

# Pull the latest changes from the main branch in the root directory
echo "Pulling changes for the monorepo..."
git pull

# Change to the Laravel directory
cd /var/www/html/monorepo/blog_laravel

# Clear Laravel routes
echo "Clearing Laravel routes..."
php artisan route:clear

# Change to the React directory
cd /var/www/html/monorepo/blog_react

# Pull the latest changes from the main branch in the React directory
echo "Pulling changes for the React app..."

# Install dependencies and build the React app
echo "Installing dependencies and building the React app..."
npm install
npm run build
