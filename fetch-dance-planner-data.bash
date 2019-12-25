echo supergeil
cd dance-planner-data
git pull
rm -rf ../node-libraries/all-services/images && cp -r ./images ../node-libraries/all-services/
pm2 restart main
