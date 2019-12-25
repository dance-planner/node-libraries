echo supergeil
cd node-libraries
git pull
cd all-services
npm run build
pm2 restart main
