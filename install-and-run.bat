@echo off
echo === РУХ Молодёжный Центр — Installing dependencies ===
cd /d "%~dp0"
npm install
if %errorlevel% neq 0 (
  echo ERROR: npm install failed
  pause
  exit /b 1
)
echo.
echo === Starting development server ===
echo Open http://localhost:3000 in your browser
echo.
npm run dev
