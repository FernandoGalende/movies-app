# Movies App

[Link to deployed app in Vercel](https://movies-app-alpha-orpin.vercel.app/)

## Intro

This is a Single Page Application created with Vite using a React TypeScript template. The app allows users to search for movies and view their details using the TMDB API.

## Instructions

The website features a search functionality where users can look up movies. The search is triggered after typing at least 3 characters, with a debounce of 500ms to prevent excessive API calls. The api is cached in memory for better performance. Users can view movie details by clicking on a movie card, and navigate back to the search results. The app implements pagination for search results and includes loading / em states for better user experience.

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
    ├── types
    │
    ├── router
    │   └── routes
    │
    ├── styles
    │   └── components
    │   └── theme
    │   └── global
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

### React Testing Library - RTL

I am a RTL lover and Kent C. Dodds fan.
Unit testing is not negotiable to me.

- User centric
- Accessibility Testing

### Cypress

I used to cover the main use cases of the app.

- Real test cases
- CI / CD integration

### Panda CSS

I have chosen Panda CSS because it provides:

- Type-safe styles
- Zero runtime
- Great developer experience
- Built-in design tokens
- Easy theming
- Great performance

## To improve

- Add more test coverage
- Enhance error handling
- Improve accessibility
- Enhance responsive design
- Add animations

[Fernando Galende](https://www.linkedin.com/in/fernandogalende/)
**Senior Frontend Engineer && Senior Design System Designer**
