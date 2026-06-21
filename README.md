<div align="center">
  <img src="./Screenshot 2026-06-21 164940.jpg" alt="MovieDeck Hero Image" width="100%" />

  # 🎬 MovieDeck

  **Find Movies You'll Love Without the Hassle**

  A sleek, modern movie discovery application built to help users seamlessly search for films, view trending titles, and explore beautiful, high-quality movie data.

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Appwrite](https://img.shields.io/badge/appwrite-%23FD366E.svg?style=for-the-badge&logo=appwrite&logoColor=white)

</div>

---

## ✨ Features

- **⚡ Live Search with Debouncing:** Optimized search functionality that fetches results instantly without overloading the API.
- **🔥 Trending Movies Tracking:** A custom backend integration that tracks what users are searching for and displays real-time trending charts.
- **🎨 Modern UI/UX:** A stunning, dark-themed responsive interface built with Tailwind CSS, featuring custom gradients and pattern overlays.
- **📊 Rich Movie Data:** Powered by the industry-standard TMDB API to deliver high-resolution posters, accurate synopses, and release info.

## 🛠️ Tech Stack

- **Frontend Framework:** React (via Vite)
- **Styling:** Tailwind CSS
- **Movie Data API:** [The Movie Database (TMDB)](https://developer.themoviedb.org/docs)
- **Backend / Database:** [Appwrite](https://appwrite.io/) (for search tracking and trending algorithms)
- **Utilities:** `react-use` (for debounce hooks)

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- Node.js installed on your machine.
- An API Key from [TMDB](https://www.themoviedb.org/settings/api).
- An [Appwrite](https://appwrite.io/) cloud project with a database and collection set up.

> **⚠️ Important Note for Users in India:** > The TMDB API is currently blocked by certain Internet Service Providers (ISPs) in India. If you are experiencing failed API calls or images not loading, please **use a VPN** to ensure the application functions correctly.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/shashwatniranjan-max/movie-deck.git](https://github.com/shashwatniranjan-max/movie-deck.git)
   cd MovieDeck
