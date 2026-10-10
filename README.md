# Next.js Project 🚀

This is a project developed with [Next.js](https://nextjs.org), initialized with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), using **TypeScript**, **CSS Modules**, and specific libraries such as [`resend`](https://resend.com/emails).

---

## 👾 Main Technologies and Tools

- **Next.js** — React framework for production.
- **TypeScript** — Static typing for greater robustness and scalability.
- **CSS Modules** — For local styles, using conventions such as `styles.content__example`.
- **resend** — Library for sending emails.

---

## 🧱 Coding Conventions

### ✨ Styles with CSS Modules

Styles are written using CSS Modules, with the following class naming convention:

```ts
styles.blockName__element;

Example: (styles.card__title, styles.hero__image);
```

---

## 🧼 Organization and Comments in CSS

All style files must be commented and organized as follows:

```css
/*
1. Positioning
2. Box model (Ex: Box model measurements, Margin, Padding, etc.)
3. Typography
4. Visuals
5. Others
*/
```

---

## 🚀 Getting Started

First, install the dependencies and run the development server:

```ts
npm install
npm run dev
# or with yarn
yarn install
yarn dev
# or pnpm
pnpm install
pnpm dev
# or bun
bun install
bun dev
```

Then open http://localhost:3000 in your browser to see the app in action.

Start editing the app from app/page.tsx. The content updates automatically when you save changes.

---

## 🚀 Release Process and GitFlow

This project uses these GitFlow rules, which you can see [here](RELEASE_PROCESS.md).

---

## 📦 Font Optimization

This project uses `next/font` to efficiently load the [Geist]('https://vercel.com/font') font, developed by Vercel.

---

## 📚 Useful Resources

[Official Next.js Documentation]('https://nextjs.org/docs')

[Next.js Interactive Tutorial]('https://nextjs.org/learn')

[Next.js GitHub Repository]('https://github.com/vercel/next.js')

---

## ☁️ Deploying with Vercel

The easiest way to deploy this project is through Vercel, a platform created by the authors of Next.js.

Check out the deployment [documentation]('https://nextjs.org/docs/app/building-your-application/deploying') to learn more.

---

## 📬 Comments

All suggestions or contributions are welcome!
