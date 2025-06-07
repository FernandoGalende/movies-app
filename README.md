# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## Project Structure

```
src/
├── api/
│   └── movies.ts          # API calls and services
├── components/
│   └── Input/            # Shared components
│       ├── index.tsx
│       └── styles.ts
├── types/
│   └── index.ts          # TypeScript interfaces and types
└── views/
    ├── Search/           # Search view
    │   ├── components/
    │   │   └── SearchForm/
    │   │       ├── index.tsx
    │   │       └── styles.ts
    │   ├── index.tsx
    │   └── styles.ts
    └── Detail/           # Movie detail view
        ├── components/
        │   ├── BackButton/
        │   │   ├── index.tsx
        │   │   └── styles.ts
        │   ├── MovieContent/
        │   │   ├── index.tsx
        │   │   └── styles.ts
        │   ├── LoadingState/
        │   │   ├── index.tsx
        │   │   └── styles.ts
        │   ├── ErrorState/
        │   │   ├── index.tsx
        │   │   └── styles.ts
        │   └── index.ts
        └── index.tsx
```

The project follows a feature-based structure where:

- `api/`: Contains all API-related code and services
- `components/`: Shared/reusable components used across the application
- `types/`: TypeScript type definitions and interfaces
- `views/`: Main application views/pages
  - Each view has its own components folder for view-specific components
  - Components are colocated with their styles for better maintainability
  - Complex views use a barrel file (index.ts) to export their components
