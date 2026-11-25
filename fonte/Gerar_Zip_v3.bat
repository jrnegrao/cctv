@echo off
chcp 65001 >nul
title Gerar zip do app ExB
cd /d C:\ExB_1.19

echo.
echo  ===============================================
echo    GERAR ZIP DE UM APP DO EXPERIENCE BUILDER
echo  ===============================================
echo.
echo    2 = CCTV (Monitoramento)
echo    3 = Mobilidade Urbana
echo    4 = Ordenamento Territorial (Zoneamento)
echo.
set "APP="
set /p APP=  Qual app? (2, 3 ou 4):
if "%APP%"=="2" set "NOMEAPP=cctv"
if "%APP%"=="3" set "NOMEAPP=mobilidade"
if "%APP%"=="4" set "NOMEAPP=zoneamento"
if not defined NOMEAPP (
  echo.
  echo  App invalido. Feche e tente de novo.
  pause
  exit /b 1
)

set "VER="
set /p VER=  Numero da versao (so o numero, ex.: 16):
if not defined VER (
  echo.
  echo  Versao nao informada. Feche e tente de novo.
  pause
  exit /b 1
)
set "ARQ=%NOMEAPP%_v%VER%.zip"

echo.
echo  Gerando %ARQ% (app %APP%)... aguarde.
echo.
node -e "require('./server/src/middlewares/dev/apps/app-download.js').zipApp('%APP%', '%ARQ%', '', {locales:['pt-br']});"
set "ERRO=%errorlevel%"
if not "%ERRO%"=="0" (
  echo.
  echo  Nao gerei um zip novo: provavelmente JA EXISTE um %ARQ% (gerado antes^).
  echo  Vou procurar o que ja existe. Se quiser um novo, rode de novo com outro numero de versao.
)

echo  Procurando o arquivo gerado...
set "ACHOU="
for %%P in ("C:\ExB_1.19" "%USERPROFILE%\Downloads" "%USERPROFILE%\Documents" "%USERPROFILE%\Desktop" "%USERPROFILE%\OneDrive" "%TEMP%") do (
  if not defined ACHOU for /f "delims=" %%F in ('dir /s /b /o-d "%%~P\%ARQ%" 2^>nul') do if not defined ACHOU set "ACHOU=%%F"
)
if defined ACHOU (
  echo  Pronto: %ACHOU%
  echo  Abrindo a pasta com o zip selecionado...
  explorer /select,"%ACHOU%"
) else (
  echo  Zip gerado, mas nao achei o arquivo %ARQ%. Abrindo a pasta do ExB para voce procurar.
  explorer "C:\ExB_1.19"
)
echo.
pause
