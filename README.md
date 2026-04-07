# Next.js 16 Tailwind Template

A reusable starter for Next.js 16 projects with the App Router, TypeScript, Tailwind CSS 4, Zustand, React Query, NextAuth, next-intl, Jest, ESLint, Prettier, and Plop generators.

## Stack

- Next.js 16
- React 19
- TypeScript 6
- Tailwind CSS 4
- Zustand
- TanStack Query
- NextAuth
- next-intl
- Jest + Testing Library
- ESLint + Prettier
- Plop

## Use As A Template

On GitHub:

1. Push this repository to GitHub.
2. Open `Settings`.
3. Enable `Template repository`.
4. Click `Use this template` for each new project.

Local clone flow:

```bash
git clone <repo-url> my-app
cd my-app
npm install
npm run init:template -- my-app
cp .env.example .env.local
npm run dev
```

If you want a fresh git history after cloning:

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

## Getting Started

```bash
npm install
npm run init:template -- my-app
cp .env.example .env.local
npm run dev
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run test
npm run generate
npm run init:template -- my-app
```

## Environment Variables

This template ships with placeholder values only.

Create your local config from the example:

```bash
cp .env.example .env.local
```

Update the values for your project before shipping.

## Project Structure

```text
src/
  app/
  components/
  configs/
  constants/
  contexts/
  hocs/
  i18n/
  middlewares/
  modules/
  repositories/
  services/
  stores/
  styles/
  types/
  utils/
```

## Generators

Generate boilerplate code with Plop:

```bash
npm run generate
```

## Template Cleanup Checklist

Before publishing your own project from this template:

- Run `npm run init:template -- your-project-name`
- Update metadata, branding, and logos
- Replace placeholder environment values
- Remove demo/example modules you do not need
- Review auth, API, and SEO configuration

## License

MIT
