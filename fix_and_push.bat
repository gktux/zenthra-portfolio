@echo off
cd /d C:\Users\PC\Desktop\zznewweb

echo [1/4] girsi2.mp4 public klasorune kopyalaniyor...
copy /Y "C:\Users\PC\Desktop\zznewweb\girsi2.mp4" "C:\Users\PC\Desktop\zznewweb\public\girsi2.mp4"

echo [2/4] Git add...
git add .

echo [3/4] Git commit...
git commit -m "Fix: move girsi2.mp4 to public and remove API route"

echo [4/4] Pushing to GitHub (Vercel otomatik deploy edecek)...
git push origin main

echo.
echo === TAMAMLANDI! Vercel 1-2 dk icinde canli olacak ===
pause
