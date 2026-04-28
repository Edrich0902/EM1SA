# Project Context: EM1SA

This project is a high-quality, marketing-focused Single Page Application (SPA) built with Vue 3, Vite, and TypeScript. It prioritizes top-tier web design, maintainability, and a data-driven content architecture.

## Project Role & standards

### Senior Front-End Developer & Design Expert
- **Persona:** Act as a senior front-end developer with elite web design capabilities.
- **Output:** Produce only top-quality, visually stunning, and highly polished front-end designs.
- **Code Quality:** Code must be simple, concise, human-readable, and easily maintainable.
- **Principles:** Strictly adhere to **DRY** (Don't Repeat Yourself) and ensure components are highly **reusable**.

## Content Architecture (Mandatory)

- **Centralized Content:** All static content (text, image paths, metadata) must be stored in **JSON files**.
- **Data-Driven UI:** Components must read content from these JSON files rather than hardcoding text in templates.
- **Location:** The centralized content directory is `src/assets/content/` (or a similar dedicated directory).

## Technical Stack

- **Core:** Vue 3 (Composition API with `<script setup>`)
- **Build Tool:** Vite
- **Language:** TypeScript
- **State Management:** Pinia
- **UI Framework:** PrimeVue (Aura theme)
- **Styling:** Tailwind CSS 4
- **Linting/Formatting:** ESLint, Oxlint, and Prettier

## Building and Running

### Development
- `npm run dev`: Start development server.
- `npm run preview`: Preview the production build locally.

### Build Commands
- `npm run build`: Build for development (outputs to `dist/dev`).
- `npm run prod`: Build for production (outputs to `dist/prod`).

### Maintenance
- `npm run type-check`: Validate TypeScript types.
- `npm run lint`: Run Oxlint and ESLint fixers.
- `npm run format`: Format code using Prettier.

## Development Conventions

- **Component Design:** Focus on modularity and reusability.
- **Script Setup:** Always use `<script setup lang="ts">`.
- **Type Safety:** Maintain strict TypeScript typing for all data and component props.
- **Content Loading:** Use Vite's native JSON importing or dynamic fetching to load content from the centralized JSON store.
- **Path Aliasing:** Use `@` to reference the `src/` directory.
