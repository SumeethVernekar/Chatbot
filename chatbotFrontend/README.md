
# 🔥 CodeVision UI — React Project

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
>>>>>>> d5221a8de523f8b2c86ea213a2fb9a1ac09bf261

A simple, responsive React-based UI for an AI code-to-video explanation tool.
This project includes a sidebar with menu options like **Chats**, **History**, **Settings**, **About**, **Help**, and **Theme Toggle**.
Latest update includes the **History option in the menu**.

---

## 🚀 Features

* Modern Sidebar Layout
* Chats Section
* NEW: **History Section Added**
* Settings & About Pages
* Help & Support Button
* Theme Toggle (Dark / Light Mode)
* Clean UI written in **App.jsx** & **App.css**

---

## 📁 Project Structure

```
root/
├── App.jsx
├── App.css
├── index.js
└── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Install Node.js

Download from: [https://nodejs.org](https://nodejs.org)
(Recommended: LTS version)

### 2️⃣ Install Dependencies

Navigate into your project folder and run:

```
npm install
```

### 3️⃣ Start Development Server

```
npm start
```

### 4️⃣ Open in Browser

React will auto-open or visit:

```
http://localhost:3000/
```

---

## 🧩 Usage

### Sidebar Includes:

* **Chats** → Shows chat section
* **History** → Newly added history option
* **Settings** → Preference options
* **About** → App description
* **Help & Support** → Assistance section
* **Theme Toggle** → Switch between Dark/Light mode

Modify the UI inside:

* `App.jsx` (UI + Logic)
* `App.css` (Styles)

---

## ❗ Common Errors & Fixes

### ❌ Error: `Module not found: Can't resolve 'lucide-react'`

The icons require lucide-react.
Fix:

```
npm install lucide-react
```

---

### ❌ Error: `Unexpected token <` or white screen

Occurs when React fails to compile.

Fix:

```
npm install
npm start
```

or ensure your `App.jsx` has **default export**:

```
export default App;
```

---

### ❌ Error: Styles not applying

Ensure the stylesheet is imported at the top of `App.jsx`:

```
import './App.css';
```

---

### ❌ Error: Theme toggle not working

Make sure you included the Dark Mode class in `index.css` or global CSS:

```
.dark {
  background: #111;
  color: #fff;
}
```

---

## 🧪 Running Production Build

To create optimized build:

```
npm run build
```

Build output appears in:

```
/build
```

---

## 📝 Final Notes

* Keep `App.jsx` clean and avoid inline styles for maintainability.
* For new pages (like History page), create separate components.
* For deployment, use services like **Vercel**, **Netlify**, or **GitHub Pages**.

---



---
