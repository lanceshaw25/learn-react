# Local React Development Setup (Linux Mint + IntelliJ)

## Goal

Create a local development environment that allows me to complete the Scrimba React lessons without relying on the Scrimba editor.

---

# Prerequisites

- Linux Mint
- IntelliJ IDEA Community Edition (already installed)
- Git
- Node.js (LTS)
- npm (comes with Node.js)

---

# 1. Install Node.js (LTS)

Check whether Node.js is already installed:

```bash
node --version
npm --version
```

If it isn't installed (or the version is very old), install the current LTS version.

Verify the installation:

```bash
node --version
npm --version
```

---

# 2. Create a React Project

Open a terminal and create a new project using Vite:

```bash
npm create vite@latest
```

Answer the prompts:

```
Project name: react-playground
Framework: React
Variant: JavaScript
```

---

# 3. Install Dependencies

```bash
cd react-playground
npm install
```

---

# 4. Start the Development Server

```bash
npm run dev
```

You'll see something similar to:

```
Local: http://localhost:5173/
```

Open that URL in your browser.

---

# 5. Open the Project in IntelliJ

From IntelliJ:

**File → Open**

Select the `react-playground` directory.

IntelliJ should automatically recognize it as a Node.js project.

---

# 6. Understand the Project Structure

```
react-playground/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── assets/
│
├── package.json
├── vite.config.js
└── node_modules/
```

Most of the Scrimba lessons will involve editing files inside:

```
src/
```

---

# 7. Workflow for Scrimba Lessons

For each lesson:

1. Watch the lesson.
2. Pause when the challenge appears.
3. Implement the solution in IntelliJ.
4. Save the file.
5. Observe the browser update automatically (Hot Reload).
6. Compare your solution with the instructor's.
7. Commit meaningful milestones to Git.

---

# 8. Use AI Effectively

When you get stuck:

1. Try solving the problem yourself for 10–15 minutes.
2. Ask Antigravity CLI for a hint (not the complete solution).
3. Implement the fix yourself.
4. Ask Antigravity to review your code.
5. Compare your solution with Scrimba's explanation.

Think of AI as a junior developer that reviews code and answers questions—not as someone who writes the entire project for you.

---

# 9. Useful npm Commands

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 10. Helpful IntelliJ Features

- Integrated Terminal
- Git integration
- Debugger
- Refactoring tools
- Code completion
- Search Everywhere (`Shift` twice)

---

# 11. Suggested Git Workflow

Initialize Git (if needed):

```bash
git init
```

After each completed lesson:

```bash
git add .
git commit -m "Complete React lesson: Components"
```

Example commits:

- Initial React project
- Components
- JSX
- Props
- State
- Events
- Forms
- Effects

---

# 12. Learning Goals

By completing the course locally, I will gain experience with:

- React
- Modern JavaScript (ES6+)
- JSX
- Vite
- npm
- Git
- IntelliJ IDEA
- AI-assisted development
- Professional local development workflow

This workflow closely mirrors how React applications are developed in professional software teams.
