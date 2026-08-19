# 🎬 Movie & TV Shows App

A modern, responsive movie and TV shows web application built with **React**, **Tailwind CSS**, and the **TMDB API**.

The application allows users to discover movies and TV shows, search for content, explore detailed information, manage a personal wishlist, read reviews and recommendations, switch between Arabic and English, change the theme, and interact with an AI assistant specialized in movies and TV shows.

## ✨ Features

- 🎬 Browse currently playing and popular movies
- 📺 Browse popular TV shows
- 🔎 Search for movies and TV shows
- 📄 Pagination with TMDB-style page navigation
- 🎥 Movie and TV show details
- ⭐ Ratings, reviews, and recommendations
- ❤️ Wishlist with `localStorage` persistence
- 🤖 AI movie & TV assistant powered by Google Gemini
- 🌐 Arabic & English language support
- ↔️ RTL support for Arabic
- 🌙 Dark & Light mode
- 📱 Fully responsive design
- ⚡ Loading, error, and empty states
- 🧩 Reusable and modular React components

## 🛠️ Tech Stack

- **React**
- **React Router**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **TMDB API**
- **Google Gemini API**
- **React Markdown**
- **Context API**
- **localStorage**
- **Vite**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
```

### 2. Install Dependencies

Make sure you have **Node.js** installed, then run:

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file in the root directory:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

> ⚠️ Never commit your `.env` file or expose your API keys publicly.

The project already includes `.env` in `.gitignore`.

### 4. Get API Keys

You need API keys from:

- **TMDB** for movie and TV show data
- **Google Gemini** for the AI assistant

Add your keys to the `.env` file using the variable names above.

### 5. Start the Development Server

```bash
npm run dev
```

Then open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 📦 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

## 🔐 Environment Variables

| Variable              | Description                             |
| --------------------- | --------------------------------------- |
| `VITE_TMDB_API_KEY`   | API key used to access TMDB             |
| `VITE_GEMINI_API_KEY` | API key used by the Gemini AI assistant |

## 👥 Team Contributions

### Amira Mohamed Alzaian

- Set up the project structure, application routing, outer layout, and Navbar.
- Implemented search, search results pages, translations, and Dark/Light theme support.
- Built the generic TMDB fetch helper and reusable generic `MovieCard` component.
- Handled overall project styling and added UI/UX enhancements.

### Basant Mohamed Elkony

- Implemented Movie and TV Shows listing with global `MovieContext` and `TvContext`.
- Added TMDB-style pagination with Previous/Next controls and page navigation.
- Built responsive Movie/TV grids with loading, error, and empty states.
- Implemented separate movie and TV search functionality and integrated the TMDB API layer.

### Hanin Mahmoud Ahmed

- Built the global `WishlistContext` with `localStorage` persistence.
- Designed the Wishlist page, `WishlistCard`, filters, and empty state.
- Integrated wishlist functionality across Movie/TV cards and Navbar badge.
- Added Arabic/English translations and RTL support for the Wishlist section.

### Asmaa Saad Elsaied Nada

- Implemented Movie and TV Details pages with complete information.
- Built movie/TV recommendations and reviews components.
- Integrated existing API functions and added TV recommendations/reviews endpoints.
- Connected Wishlist functionality with `WishlistContext` across details and cards.

### Mohamed Ismail Eldfrawy

- Integrated Google Gemini API and built the movie/TV-focused AI assistant.
- Implemented multi-turn conversations with loading, error, and typing states.
- Built the chatbot UI with reusable chat components and Markdown rendering.
- Added responsive design, Dark/Light mode support, and secure environment configuration.

## 🌐 Community Contribution

Contributions are welcome! If you'd like to improve the project:

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes:

```bash
git add .
git commit -m "feat: add your feature"
```

5. Push your branch:

```bash
git push origin feature/your-feature
```

6. Open a **Pull Request** and describe your changes.

## 🐛 Issues & Feedback

Found a bug or have an idea for improvement?

Feel free to open an **Issue** and provide:

- A clear description of the problem
- Steps to reproduce it
- Screenshots if applicable
- Your suggested solution, if you have one

## 📄 License

This project is open source and available under the **MIT License**.

---

⭐ If you like this project, consider giving the repository a star!

Made with ❤️ by the team.
