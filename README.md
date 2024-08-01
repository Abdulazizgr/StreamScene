# TMDB Movie and TV Show Browser

This project uses The Movie Database (TMDB) API to display information about popular, top-rated, and currently playing movies and TV shows. The application includes features such as search functionality, movie and TV show details pages, and pagination for search results.

## Usage

1. Open `index.html` in a web browser to view the main page.
2. Use the navigation bar to browse popular, top-rated, now playing, and upcoming movies and TV shows.
3. Use the search bar to find specific movies or TV shows.

## API Integration

This project uses TMDB API to fetch data. To use the TMDB API, you need to register and get an API key from [TMDB](https://www.themoviedb.org/settings/api).

1. Register and get your API key.
2. Replace the placeholder API key in the `global` object with your own API key:

```javascript
const global = {
  api: {
    apiKey: 'your_api_key_here',
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};
```

## Functions

### `displayPopularMovies`

Fetches and displays the 20 most popular movies.

### `displayTopRatedMovies`

Fetches and displays the 20 most top-rated movies.

### `displayNowPlayingMovies`

Fetches and displays the 20 most currently playing movies.

### `displayUpcomingMovies`

Fetches and displays the 20 most upcoming movies.

### `displayPopularShows`

Fetches and displays the 20 most popular TV shows.

### `displayTopRatedShows`

Fetches and displays the 20 most top-rated TV shows.

### `displayAiringTodayShows`

Fetches and displays the 20 TV shows airing today.

### `displayOnTheAirShows`

Fetches and displays the 20 currently on-the-air TV shows.

### `displayMovieDetails`

Displays detailed information about a specific movie.

### `displayShowDetails`

Displays detailed information about a specific TV show.

### `search`

Performs a search based on the user's input and displays the results.

### `displaySearchResults`

Displays the search results.

### `displayPagination`

Creates and displays pagination for search results.

### `displayBackgroundImage`

Displays a background image overlay on the details pages.

## Styling

The styling for this project is done using basic CSS. Modify the styles in the `style.css` file as needed to customize the appearance of the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.



---
