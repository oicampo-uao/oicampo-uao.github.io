@echo off
setlocal

rem Ruta del archivo original y prefijo del nombre
set "rutaArchivo=5222142023300.sm"
set "prefijoNombre=52221420233"

rem Iterar del 01 al 10
for /l %%i in (1,1,10) do (
    set "numero=%%i"
    if %%i lss 10 set "numero=0%%i"
    setlocal enabledelayedexpansion
    set "nuevoNombre=!prefijoNombre!!numero!.sm"
    copy "!rutaArchivo!" "!nuevoNombre!"
    endlocal
)

echo Copias creadas.

endlocal
