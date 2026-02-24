@echo off
REM Set GEM_HOME for the current terminal session after rvm command completes
set "RVM_ROOT=%~dp0..\.."
for /f "delims=" %%h in ('node "%RVM_ROOT%\src\tools\current\get_gemhome.js"') do set "RVM_GEM_HOME=%%h"
if not "%RVM_GEM_HOME%" == "" (
    set "GEM_HOME=%RVM_GEM_HOME%"
)
set "RVM_GEM_HOME="
