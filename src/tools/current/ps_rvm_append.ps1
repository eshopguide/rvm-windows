# Set GEM_HOME for the current terminal session after rvm command completes
$rvmRoot = (Resolve-Path "$PSScriptRoot/../..").Path
$nodeExe = (Get-Command node -ErrorAction SilentlyContinue)?.Source
if ($nodeExe) {
    $gemHome = & $nodeExe "$rvmRoot\src\tools\current\get_gemhome.js"
    if ($gemHome) {
        [Environment]::SetEnvironmentVariable("GEM_HOME", $gemHome, "Process")
    }
}
