# 🎬 Movie Search App

A modern movie search application built with React that lets you explore movies using [The Movie Database (TMDB)](https://www.themoviedb.org/) API.

![Movie Search Demo](demo.gif)

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## 🔑 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_API_URL=https://api.themoviedb.org/3
```

Get your API key by [creating an account on TMDB](https://www.themoviedb.org/signup).

## 🎯 Features

- **Real-time Search**: Results update as you type (with debouncing)
- **Movie Details**: View comprehensive information about each movie
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Accessibility**: Full keyboard navigation and screen reader support
- **Error Handling**: Clear feedback for API errors and empty states

## 🏗️ Project Overview

```
src/
├── views/               # Main features
│   ├── Search/         # Movie search & results
│   └── Detail/         # Movie information
├── components/         # Shared UI components
├── api/               # TMDB API integration
└── types/            # TypeScript definitions
```

### Key Features Implementation

#### Search View

- Debounced search to prevent API spam
- Results pagination
- Loading states and error handling
- Empty state handling

#### Detail View

- Movie metadata display
- Poster image optimization
- Back navigation
- Loading and error states

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: [Panda CSS](https://panda-css.com/) for type-safe styling
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **API**: TMDB REST API

## 📱 Screenshots

### Search View

![Search View](search.png)

- Real-time search results
- Movie cards with key information
- Pagination for large result sets

### Detail View

![Detail View](detail.png)

- High-resolution movie poster
- Comprehensive movie information
- Easy navigation back to search

## 🧪 Development

```bash
# Run tests
pnpm test

# Check types
pnpm typecheck

# Lint code
pnpm lint

# Format code
pnpm format
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run the test suite
5. Submit a pull request

## 📝 Notes

- The app uses TMDB's free tier API which has rate limiting
- Image optimization is handled through TMDB's image service
- Styles are generated at build time using Panda CSS

## 🚧 Todo

1. Improve empty states
2. Do end 2 end testing
3. Increase coverage test

## 📄 License

MIT License - feel free to use this project as a template for your own movie search application.
