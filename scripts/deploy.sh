# Get last changes from git
git fetch -av
git reset --hard origin/main

# Update env file
cp .env.production .env

# Run Custom Commands
npm install
npm run build --if-present
npx kill-port 8082
serve -s dist -p 8082 > serve.log 2>&1 & # WARNING: If serve is not installed on your system run: npm install -g serve

# Exit
exit