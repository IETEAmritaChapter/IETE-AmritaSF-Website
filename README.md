# IETE AmritaSF Website
Official website for the **IETE Amrita Student Forum (IETE Amrita SF)**. This application is built using [Next.js](https://nextjs.org) to deliver a modern, dynamic, and responsive experience.

---

## Project Overview

The **IETE Amrita Student Forum Website** aims to:

- **Showcase** the organization's ongoing and past projects, upcoming events, and key initiatives.  
- **Provide an intuitive, responsive user interface** for members, alumni, and the public to explore verticals, achievements, and community updates.  
- **Enable seamless navigation** to CP leaderboards, testimonials, blogs, and other essential sections via a dynamic platform.  
- **Promote community engagement** through real-time updates and integrated event management tools.  

---

## Table of Contents

1. [Getting Started](#getting-started)  
2. [Installation](#installation)  
3. [Usage](#usage)  
4. [Commit Guidelines](#commit-guidelines)  
5. [Technologies Used](#technologies-used)  
6. [Using `next/font/local` for Custom Fonts](#using-nextfontlocal-for-custom-fonts)  
7. [Learn More](#learn-more)  
8. [Deploy on Vercel](#deploy-on-vercel)  
9. [Contributing](#contributing)  

---

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application. The app auto-updates as you make changes.

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/IETEAmritaChapter/IETE-AmritaSF-Website.git
   cd IETE-AmritaSF-Website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

---

## Usage

- **Start Development Server:**
  
  ```bash
  npm run dev
  ```
  
  The application will auto-reload as you make changes.

- **Build for Production:**
  
  ```bash
  npm run build
  ```
  
  Run the production build:
  
  ```bash
  npm start
  ```

---

## Commit Guidelines

### Web Dev Team Note

- This project uses **Commitlint** to enforce proper commit message standards.

- After pulling the `main` branch, ensure that you install the necessary dependencies:

   ```bash
   npm install
   ```

### Steps to Commit Changes

1. **Stage your changes:**
   
   ```bash
   git add <files>
   ```

2. **Commit using `npx cz`:**
   
   ```bash
   npx cz
   ```

   This opens a guided interface for writing standardized commit messages.

---

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.  
- **React**: Library for building user interfaces.  
- **Tailwind CSS**: Utility-first CSS framework for rapid design.  
- **ESLint**: Tool for identifying and fixing code issues.  
- **PostCSS**: CSS processing tool.  
- **Node.js**: JavaScript runtime environment.

---

## Using `next/font/local` for Custom Fonts

### Why `next/font/local`?

`next/font/local` optimizes and loads custom fonts directly from your project’s source files. Fonts should be stored in the `src` directory to be accessible.

### Steps for Adding Fonts:

1. **Create a Fonts Directory:**  

   Place font files inside `src/fonts`.

   ```plaintext
   src/
     └── fonts/
         ├── Montserrat-Regular.woff
         └── MontserratAlternates-Regular.woff
   ```

2. **Import Fonts Using `next/font/local`:**

   In your component file:

   ```javascript
   import localFont from 'next/font/local';

   const customFont = localFont({
     src: './fonts/Montserrat-Regular.woff',
     src: './fonts/MontserratAlternates-Regular.woff',
   });
   ```

### Important Notes:

- Font paths must be **relative** to the importing file.  
- Avoid placing fonts in the `public` directory, as `next/font/local` does not work with public assets.  
- Fonts imported this way are **automatically optimized** by Next.js.

---

## Learn More

Explore additional resources to enhance your Next.js expertise:

- [Next.js Documentation](https://nextjs.org/docs): In-depth details on features and APIs.  
- [Learn Next.js](https://nextjs.org/learn): Interactive Next.js tutorial.  
- [Next.js GitHub Repository](https://github.com/vercel/next.js): Feedback and contributions welcome!  

---

## Deploy on Vercel

Easily deploy this Next.js app via [Vercel](https://vercel.com). For detailed instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Contributing

### Steps to Contribute:

1. **Pull the latest changes:**

   ```bash
   git pull origin main
   ```

2. **Create a feature branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make changes and commit:**

   ```bash
   git add <files>
   npm install --save-dev commitizen cz-conventional-changelog
   npx cz
   ```

4. **Push your branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Submit a pull request:**

   Ensure it adheres to the coding standards. PRs require approval from two reviewers before merging into the `main` branch.

---
