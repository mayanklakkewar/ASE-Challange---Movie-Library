# Movie Database & Watchlist App

A React-based movie app that allows users to browse popular movies from TMDB, search for movies by title, and manage a personal watchlist stored on the client-side.
The app is built with React, Tailwind CSS, and uses localStorage to persist user watchlists.

## Project Goal

- Browse popular movies fetched from TMDB API.
- Search movies by title.
- Add movies to a personal watchlist.
- View and manage the watchlist in a separate view.

## Core Features

- Fetch popular movies from TMDB API on page load.
- Display movies in a responsive grid with poster, title, and overview.
- Search functionality to find movies by title.
- Add to Watchlist button to save movies in localStorage.
- Watchlist view to display all added movies.

## Bonus Features ✨

- Remove movies from the watchlist.
- Client-side routing for multiple views (Home & Watchlist).
- Use of React state management for efficient updates across components.


## Tech Stack

- Frontend: React.js, Tailwind CSS
- API: TMDB (The Movie Database)
- State Management: React Hooks (useState, useEffect)
- Persistence: localStorage
- Tooling: Vite

## Setup Instructions

1. Clone the Repository
```bash
git clone [your-github-repo-link]
cd [project-folder]
```

2. Install Dependencies
```bash
npm install
```

3. Configure Environment Variables
   
Create a .env file in the project root and add your TMDB API key:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

4. Run the Project
```bash
npm run dev
```

## How It Works

1. Fetching Movies: Uses TMDB /movie/popular endpoint and optional search endpoints.

2. State Management:
- movies state stores fetched movies.
- watchlist state is synced with localStorage.

3. Watchlist Persistence:
- Adding/removing movies updates localStorage, so the watchlist remains across page reloads.

4. Rendering:
- Movies are displayed using a reusable MovieCard component.
- Grid layout adapts for different screen sizes.

## Usage

1. Browse popular movies on the Home page.
2. Use the search bar to find a movie by title.
3. Click “Add to Watchlist” to save a movie.
4. Navigate to the Watchlist view to see saved movies.
5. Remove movies from watchlist using the remove button.
