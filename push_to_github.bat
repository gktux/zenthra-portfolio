@echo off
cd /d C:\Users\PC\Desktop\zznewweb
echo Setting up Git repository...
git init
git add .
git commit -m "Initial commit - Zenthra web application"
git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/gktux/zenthra-portfolio.git
echo Pushing to GitHub...
git push -u origin main --force
echo Done!
