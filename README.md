# Movies App

[Link to deployed app in Vercel](https://movies-app-alpha-orpin.vercel.app/)

## Intro

This is a Single Page Application created with Vite using a React TypeScript template. The app allows users to search for movies and view their details using the TMDB API.

## Instructions

_Note: In a real production scenario, I would never upload the .env file to the repository. I’ve included it here just for simplicity and demonstration purposes._

The application provides a seamless movie search experience with the following features:

- **Search Functionality**:

  - Real-time movie search with 500ms debounce to optimize API calls
  - In-memory caching for improved performance
  - Pagination support for search results

- **Navigation**:

  - View detailed movie information by clicking on movie cards
  - Navigate back to search results
  - Full keyboard navigation support for accessibility

- **User Experience**:
  - Loading states for better feedback
  - Empty state handling with favorite movies
  - Empty image errors
  - Global errors page

## Getting started locally with pnpm

1. Ensure [Node.js](https://nodejs.org/) is installed.
1. Install [pnpm](https://pnpm.io/installation) globally: `$ npm install -g pnpm`
1. Clone the repository: `$ git clone https://github.com/FernandoGalende/movies-app`
1. Install packages `$ pnpm install`
1. Start the development server: `$ pnpm dev` + open `http://127.0.0.1:5173`
1. Run tests: `$ pnpm test`
1. Open Cypress: `$ pnpm cypress:open`. The project should be running on PORT: `http://127.0.0.1:5173`

## My Approach

### Error Handling

I have implemented proper error handling for API calls and user interactions, with appropriate loading states and error messages.

## Architecture

```
├── .github // ci/cd setup here
│   └── ...
│
├── public
│   ├── favicon.ico
│   └── index.html
│
├── cypress
│   ├── e2e // e2e test cases here
│   └── ..
│
├── dist // bundle
│   └── ...
│
└── src
    ├── api // TMDB api integration
    │   └── ...
    │
    ├── components // shared components
    │   └── ...
    │
    ├── views // pages on the app
    │   └── Search
    │   └── Detail
    │
    ├── hooks // custom hooks
    │   └── useSearch
    │
    │
    ├── context
    │   └── search
    │
    ├── types
    │
    ├── router
    │   └── routes
    │
    ├── App.tsx
    └── main.tsx
```

## CI / CD

I have created a ci/cd for running these steps:

- Lint
- TS check
- Unit testing
- End2End testing
- Deploy to Vercel

## Technologies

### TypeScript

I like TS because of:

- Compilation time errors
- Make development faster
- Easy to scale up
- More structured code
- Re-usable types
- Fast refactoring
- Less errors

### Vite

- Fast development server
- Tree shaking
- Hot Module Replacement
- Fast and optimized build

### Pnpm

- Faster
- Symlinks concept

### Vitest

- Performance
- Easy config

### Panda CSS

Panda CSS is a modern CSS-in-JS solution that generates utility classes at build time. Unlike traditional CSS-in-JS libraries, it doesn't add runtime overhead because all styles are pre-compiled.

The workflow is simple:

1. You write your styles using Panda's utility classes or custom styles
2. During development and build, Panda analyzes your code
3. It generates optimized CSS classes in the `src/styled-system` folder
4. These generated classes are then used in your application

Panda generates the corresponding CSS classes at build time, ensuring type safety and optimal performance.

You will see this in the DOM:

```tsx
<div className="flex items-center p-4 bg-gray-100">
```

I have chosen Panda CSS because it provides:

- Type-safe styles
- Zero runtime
- Great developer experience
- Built-in design tokens
- Easy theming
- Great performance

## A11y

I have implemented several accessibility features to ensure the app is usable by everyone:

**rem**

- Used relative units (rem) to support browser zoom functionality, allowing users with visual impairments to scale the content according to their needs.

**aria-labels & role**

- Added descriptive ARIA labels and semantic roles to improve screen reader compatibility, making the app more navigable for users relying on assistive technologies.

**keyboard-navigation**

- Implemented comprehensive keyboard navigation support, including focus management and keyboard shortcuts, to ensure the app is fully accessible without a mouse.

## Testing strategy

I follow [The Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) methodology by Kent C. Dodds, which emphasizes a balanced approach to testing:

- **Unit Tests**: Focused on complex business logic and individual component functionality
- **Integration Tests**: Cover component interactions and data flow
- **End-to-End Tests**: Limited to critical user flows due to their slower execution time

For end-to-end testing, I've implemented two Cypress configurations:

- `pnpm run cypress:open` for development mode: For local testing and debugging
- `pnpm run cypress:run` for CI/CD pipeline: Optimized for faster execution in the continuous integration environment

## To improve

- App performance
- Pipeline performance
- Accessibility
- Responsive design
- UI

[Fernando Galende](https://www.linkedin.com/in/fernandogalende/)
**Senior Frontend Engineer && Senior Design System Designer**
