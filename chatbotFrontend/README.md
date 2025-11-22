# 🔥 CodeVision UI — React Project

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


