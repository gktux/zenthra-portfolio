@echo off
cd /d C:\Users\PC\Desktop\zznewweb
echo === Vercel Son Deployment Loglari ===
echo.
npx vercel ls --limit 5
echo.
echo === Son Deploy Detaylari ===
npx vercel inspect --logs
echo.
pause
