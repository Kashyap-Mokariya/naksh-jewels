
# 💎 Naksh Jewels

An elegant e-commerce storefront built using **Next.js 15**, showcasing products with a modern UI powered by **Tailwind CSS**, **Radix UI**, and other headless component libraries.

---

## 🚀 Getting Started

To run this project locally:

### 1. **Clone the repository**
```bash
git clone https://github.com/your-username/naksh-jewels.git
cd naksh-jewels
```

### 2. **Install dependencies**
Using your preferred package manager:

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. **Start the development server**
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🧰 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + [tailwindcss-animate](https://github.com/joe-bell/tailwindcss-animate)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide](https://lucide.dev)
- **Data Visualization**: `recharts`
- **Utilities**: `clsx`, `date-fns`, `class-variance-authority`

---

## 📝 Notes & Assumptions

- This project is a **frontend-only showcase**, with product data stored in a static file under `src/data/products.ts`.
- Images are sourced from **Unsplash**, and configured in `next.config.ts` to allow remote access.
- No backend, database, or CMS integration is present — suitable for prototyping or future headless CMS integration.
- The UI structure follows **App Router conventions** from Next.js 13+ (`/app/page.tsx`, `/app/products`, etc.).
- Fonts are optimized using [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) with **Geist** via Vercel.

---