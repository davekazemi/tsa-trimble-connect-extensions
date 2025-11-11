# PowerShell script to build React extension and copy to public resources

Write-Host "Building React Extension..." -ForegroundColor Green

# Navigate to React folder
Set-Location HelloWorld-React

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the app
Write-Host "Building app..." -ForegroundColor Yellow
npm run build

# Navigate back to root
Set-Location ..

# Create destination folder if it doesn't exist
$destFolder = "public/resources/HelloWorld-React"
if (-not (Test-Path $destFolder)) {
    New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
}

# Copy dist files to public resources
Write-Host "Copying built files to public resources..." -ForegroundColor Yellow
Copy-Item -Path "HelloWorld-React/dist/*" -Destination $destFolder -Recurse -Force

Write-Host "Build complete! Files copied to $destFolder" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. git add public/resources/HelloWorld-React/" -ForegroundColor Cyan
Write-Host "2. git commit -m 'Update React extension build'" -ForegroundColor Cyan
Write-Host "3. git push" -ForegroundColor Cyan

