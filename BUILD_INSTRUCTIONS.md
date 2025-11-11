# Build Instructions for React Extension

## Step 1: Build the React App Locally

```bash
cd HelloWorld-React
npm install
npm run build
```

This will create a `dist/` folder with the compiled React app.

## Step 2: Copy Built Files to Public Resources

After building, copy the contents of `HelloWorld-React/dist/` to `public/resources/HelloWorld-React/`:

```bash
# On Windows (PowerShell)
Copy-Item -Path "HelloWorld-React/dist/*" -Destination "public/resources/HelloWorld-React/" -Recurse -Force

# On Mac/Linux
cp -r HelloWorld-React/dist/* public/resources/HelloWorld-React/
```

## Step 3: Push to GitHub

```bash
git add public/resources/HelloWorld-React/
git commit -m "Add built React extension files"
git push
```

## Step 4: Redeploy on Vercel

- Go to Vercel Dashboard
- Click **Deployments**
- Redeploy the latest commit

## Result

The React extension will be available at:
```
https://tsa-trimble-connect-extensions-d9y0frg7s.vercel.app/resources/HelloWorld-React/manifest.json
```

## Note

Whenever you make changes to the React app:
1. Run `npm run build` in the `HelloWorld-React` folder
2. Copy the new `dist/` files to `public/resources/HelloWorld-React/`
3. Push to GitHub
4. Redeploy on Vercel

