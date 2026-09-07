@echo off
cd /d C:\Users\PC\Desktop\zznewweb
echo Pushing updated commit to GitHub...
git add .
git commit -m "Trigger Vercel build - updated hero video sequence" --allow-empty
git push origin main
echo Done!
