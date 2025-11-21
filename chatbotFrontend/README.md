# Chatbot Frontend (React + Vite)

This repository contains a React frontend built with Vite. It includes a chat UI component, Tailwind CSS for styling, and development tooling (ESLint, PostCSS).

**This README covers:**
- How to install prerequisites
- Installation and development commands
- Tailwind CSS notes (Windows-specific tips)
- Troubleshooting and common fixes

**Requirements**
- **Node.js**: v18+ recommended (install from https://nodejs.org/)
- **npm**: comes with Node.js. On Windows, use `npm.cmd` if PowerShell blocks the `npm` shim.

**Quick Start**

1. Open a terminal in the project root (the folder that contains `package.json`).
2. Install dependencies:

```powershell
cd d:/chatbot-frontend/chatbotFrontend
npm.cmd install
```

Note for PowerShell users: some systems have an execution policy that prevents running the `npm.ps1` shim. If you see an error like `npm.ps1 cannot be loaded because running scripts is disabled`, use `npm.cmd` (as shown above) or run PowerShell as administrator and set a less restrictive execution policy (for example `Set-ExecutionPolicy RemoteSigned`) if you understand the security implications.

3. Start the dev server:

```powershell
npm.cmd run dev
```

Vite will print the local URL (by default `http://localhost:5173`). If that port is in use the server will try another port (e.g. `5174`). Open the printed URL in your browser.

Available npm scripts (from `package.json`):
- `dev` - Start the Vite development server (HMR)
- `build` - Create a production build (`vite build`)
- `preview` - Serve the production build locally (`vite preview`)
- `lint` - Run ESLint

Tailwind / CSS notes
- The project uses Tailwind CSS. The Tailwind directives are included in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Tailwind is configured in `tailwind.config.js` and PostCSS in `postcss.config.cjs`.
- Ensure `src/index.css` is imported in `src/main.jsx` (it is by default: `import './index.css'`). If Tailwind utilities don't appear to apply, try:
	- Hard-refresh the browser (Ctrl+F5) or clear cache
	- Verify the dev server terminal shows Tailwind processing with no errors
	- Confirm `tailwind.config.js` `content` paths include `./src/**/*.{js,jsx,ts,tsx}` and `./index.html`

Windows-specific notes
- If PowerShell blocks `npm`, use `npm.cmd` as shown above.
- If you prefer to change the execution policy instead of using `npm.cmd`, run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Be mindful of the security implications of changing execution policies.

Troubleshooting
- Vite import errors (e.g., `Failed to resolve import 'lucide-react'`):
	- Make sure `lucide-react` is listed in `package.json` and `npm install` finished without errors.
	- If you changed package versions, re-run `npm.cmd install`.

- App not rendering / blank page:
	- Check `src/main.jsx` to ensure the imported component is rendered. Example: if `App` is imported (`import App from './App.jsx'`) make sure you render `<App />`, not `<CollegeChatbot />` unless that symbol exists.
	- Open browser console and the dev server terminal for errors.

- Tailwind CSS not applied:
	- Ensure `@tailwind` directives are present in `src/index.css` and file is imported in `main.jsx`.
	- Confirm `tailwind.config.js` has correct `content` globs.

Security & audits
- After installing dependencies you may see `npm audit` warnings. You can try to fix automatically with:

```powershell
npm.cmd audit fix
```

If `npm audit fix` cannot resolve issues automatically, inspect the audit output and decide whether updates are safe for your project.

Project structure (important files)
- `index.html` - Vite entry HTML
- `src/main.jsx` - React app entry; imports `index.css` and mounts the app
- `src/App.jsx` - Main app component (chat UI)
- `src/CollegeChatbot.jsx` - Chatbot UI component (if used directly)
- `src/index.css` - Global CSS + Tailwind directives
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.cjs` - PostCSS configuration

Recommended next steps
- Open `http://localhost:5173` (or the port printed by `npm run dev`) and verify the UI.
- If you want, I can:
	- Commit the current changes to git with a helpful commit message
	- Run `npm audit fix` and present remaining issues
	- Replace some custom CSS with Tailwind utility classes across components

Contact / support
- If you hit any blockers, paste the terminal output and browser console errors and I will help debug further.

---
Generated README for the Chatbot Frontend project.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
