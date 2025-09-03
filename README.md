# Casino Simulation Platform

A React-based casino platform simulation project, featuring casino games, promotions, and news. Built with TypeScript, Tailwind CSS, and React hooks.

## Features

- **Casino Games**
  - Grid display of casino games with images, titles, and providers.
  - Client-side search and category filters (`slots`, `live-casino`, `table-games`, `jackpot`).
  - Real-time filtering as the user types or selects categories.

- **Promotions**
  - List of promotion cards with title and snippet.
  - Expandable "Read More" to view full terms.

- **News**
  - List of news articles with title and date.
  - Expandable "Read Article" to view full content.

- **Reusable Components**
  - Modular design: atoms, molecules, and organisms.
  - Header, navigation, cards, and search input components.

- **Custom Hook**
  - `useCasinoContent` for fetching and managing casino content.
  - Handles loading and error states gracefully.

---

## Technologies

- React 18
- TypeScript
- Tailwind CSS
- Jest + React Testing Library
- Fetch API for data
- Vite (optional if using Vite as a bundler)

---

## Project Structure
src/
├─ components/
│ ├─ atoms/ # Small reusable UI components (e.g., GameCard, NavButton)
│ ├─ molecules/ # Components composed of multiple atoms (e.g., Header, NewsCard)
│ └─ organisms/ # Larger UI sections (e.g., CasinoGames, Promotions, News)
├─ hooks/ # Custom React hooks (e.g., useCasinoContent)
├─ types/ # TypeScript type definitions
├─ utils/ # Constants and helper functions


## 🎨 Styling

This project uses **Tailwind** for styling:
## Setup & Installation

Clone the repository:
git clone <YOUR_REPO_URL>
Navigate into the project directory:

cd <YOUR_PROJECT_FOLDER>
Install dependencies:


npm install
Start the development server:

npm start
Open your browser at:
http://localhost:5173  # or your dev server URL

## 🔧 Available Scripts

npm start — Run the app in development mode.

npm build — Build the app for production.

npm test — Run Jest tests in watch mode.

npm lint — Run ESLint for code quality checks.


Built using React + Vite
