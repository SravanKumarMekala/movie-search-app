# 🎬 MovieSearch App

A responsive React application to search, explore and save favourite movies using TMDB API.

## 🔗 Live Demo
- **Live URL:** [https://movie-search-app-silk-two.vercel.app](https://movie-search-app-silk-two.vercel.app/)

## 🛠️ Tech Stack
- **Frontend:** React JS, JavaScript (ES6+), HTML5, CSS3
- **API:** TMDB (The Movie Database) API
- **State Management:** React Hooks (useState, useEffect)
- **Deployment:** Vercel

## ✨ Features
- 🔍 Search movies by title using TMDB API
- 🎬 View detailed movie info (genre, cast, director, rating, runtime)
- ❤️ Add/remove movies to favourites
- 📱 Fully responsive design
- ⚡ Fast, reusable component architecture

## 📌 Components
| Component | Description |
|---|---|
| SearchBar | Handles movie search input |
| MovieCard | Displays movie poster and basic info |
| MovieModal | Shows detailed movie information |
| Favourites | Manages saved favourite movies |

## ⚙️ Run Locally
```bash
git clone https://github.com/SravanKumarMekala/moviesearch-react.git
cd moviesearch-react
npm install
# Add your TMDB API key in App.js
npm start
```

## 📂 Project Structure
```
movie-search-app/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js
│   │   ├── MovieCard.js
│   │   ├── MovieModal.js
│   │   └── Favourites.js
│   ├── App.js
│   └── index.css
└── package.json
```
