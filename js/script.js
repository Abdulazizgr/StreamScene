const global = {
  // Store the current page URL path
  currentPage: window.location.pathname,
  search: {
    // Search term entered by the user
    term: '',
    // Search type (e.g., movie, TV show)
    type: '',
    // Current page number for pagination
    page: 1,
    // Total number of pages available
    totalPages: 1,
    // Total number of results found
    totalResults: 0,
  },
  api: {
    // Register your key at https://www.themoviedb.org/settings/api and enter it here
    // Only use this for development or very small projects. You should store your key and make requests from a server
    apiKey: '306d6531062636a9516e93b215c7aa33',
    // Base URL for the TMDB API
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};

// Function to display 20 most popular movies
async function displayPopularMovies() {
  // Fetch popular movies data from TMDB API
  const { results } = await fetchAPIData('movie/popular');

  // Iterate through the results and create HTML elements for each movie
  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="./landing page/img/upcoming/shocase-bg.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
            
          </div>
        `;

    // Append the created movie card to the popular movies container
    document.querySelector('#popular-movies').appendChild(div);
  });
}

// Function to display 20 most top-rated movies
async function displayTopRatedMovies() {
  // Fetch top-rated movies data from TMDB API
  const { results } = await fetchAPIData('movie/top_rated');

  // Iterate through the results and create HTML elements for each movie
  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="./landing page/img/upcoming/showcase-bg.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
              <h4>
                     <i class="fas fa-star text-secondary"></i> ${
                       movie.vote_average
                     } / 10
                     </h4>
    
            </p>
            
          </div>
        `;

    // Append the created movie card to the top-rated movies container
    document.querySelector('#top-rated-movies').appendChild(div);
  });
}

// Function to display 20 most Now Playing movies
async function displayNowPlayingMovies() {
  // Fetch now playing movies data from TMDB API
  const { results } = await fetchAPIData('movie/now_playing');

  // Iterate through the results and create HTML elements for each movie
  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="./landing page/img/upcoming/showcase-bg.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

    // Append the created movie card to the now playing movies container
    document.querySelector('#now-playing-movies').appendChild(div);
  });
}

// Function to display 20 most upcoming movies
async function displayUpcomingMovies() {
  // Fetch upcoming movies data from TMDB API
  const { results } = await fetchAPIData('movie/upcoming');

  // Iterate through the results and create HTML elements for each movie
  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="./landing page/img/upcoming/showcase-bg.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

    // Append the created movie card to the upcoming movies container
    document.querySelector('#upcoming-movies').appendChild(div);
  });
}

// Function to display 20 most popular TV shows
async function displayPopularShows() {
  // Fetch popular TV shows data from TMDB API
  const { results } = await fetchAPIData('tv/popular');

  // Iterate through the results and create HTML elements for each show
  results.forEach((show) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <a href="tv-details.html?id=${show.id}">
              ${
                show.poster_path
                  ? `<img
                src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                class="card-img-top"
                alt="${show.name}"
              />`
                  : `<img
              src="./landing page/img/upcoming/showcase-bg.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
              }
            </a>
            <div class="card-body">
              <h5 class="card-title">${show.name}</h5>
              <p class="card-text">
                <small class="text-muted">Air Date: ${
                  show.first_air_date
                }</small>
              </p>
            </div>
          `;

    // Append the created show card to the popular shows container
    document.querySelector('#popular-shows').appendChild(div);
  });
}

// Function to display 20 most top-rated TV shows
async function displayTopRatedShows() {
  // Fetch top-rated TV shows data from TMDB API
  const { results } = await fetchAPIData('tv/top_rated');

  // Iterate through the results and create HTML elements for each show
  results.forEach((show) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <a href="tv-details.html?id=${show.id}">
              ${
                show.poster_path
                  ? `<img
                src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                class="card-img-top"
                alt="${show.name}"
              />`
                  : `<img
              src="./landing page/img/upcoming/showcase-bg.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
              }
            </a>
            <div class="card-body">
              <h5 class="card-title">${show.name}</h5>
              <p class="card-text">
                <small class="text-muted">Air Date: ${
                  show.first_air_date
                }</small>
                <h4>
                <i class="fas fa-star text-secondary"></i> ${
                  show.vote_average
                } / 10
                </h4>
              </p>
            </div>
          `;

    // Append the created show card to the top-rated shows container
    document.querySelector('#top-rated-shows').appendChild(div);
  });
}

// Function to display 20 most airing today shows
async function displayAiringTodayShows() {
  // Fetch airing today shows data from TMDB API
  const { results } = await fetchAPIData('tv/airing_today');

  // Iterate through the results and create HTML elements for each show
  results.forEach((show) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <a href="tv-details.html?id=${show.id}">
              ${
                show.poster_path
                  ? `<img
                src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                class="card-img-top"
                alt="${show.name}"
              />`
                  : `<img
              src="./landing page/img/upcoming/showcase-bg.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
              }
            </a>
            <div class="card-body">
              <h5 class="card-title">${show.name}</h5>
              <p class="card-text">
                <small class="text-muted">Air Date: ${
                  show.first_air_date
                }</small>
              </p>
            </div>
          `;

    // Append the created show card to the airing today shows container
    document.querySelector('#airing-today-shows').appendChild(div);
  });
}

// Function to display 20 most on-the-air shows
async function displayOnTheAirShows() {
  // Fetch on-the-air shows data from TMDB API
  const { results } = await fetchAPIData('tv/on_the_air');

  // Iterate through the results and create HTML elements for each show
  results.forEach((show) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <a href="tv-details.html?id=${show.id}">
              ${
                show.poster_path
                  ? `<img
                src="https://image.tmdb.org/t/p/w500${show.poster_path}"
                class="card-img-top"
                alt="${show.name}"
              />`
                  : `<img
              src="./landing page/img/upcoming/showcase-bg.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
              }
            </a>
            <div class="card-body">
              <h5 class="card-title">${show.name}</h5>
              <p class="card-text">
                <small class="text-muted">Air Date: ${
                  show.first_air_date
                }</small>
              </p>
            </div>
          `;

    // Append the created show card to the on-the-air shows container
    document.querySelector('#on-tv-shows').appendChild(div);
  });
}

// Function to display movie details on the details page
async function displayMovieDetails() {
  // Get movie ID from URL query string
  const movieId = window.location.search.split('=')[1];

  // Fetch movie details data from TMDB API
  const movie = await fetchAPIData(`movie/${movieId}`);

  // Display background image overlay
  displayBackgroundImage('movie', movie.backdrop_path);

  const div = document.createElement('div');

  // Create HTML content for movie details
  div.innerHTML = `
    <div class="details-top">
      <div>
        ${
          movie.poster_path
            ? `<img
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          class="card-img-top"
          alt="${movie.title}"
        />`
            : `<img
        src="./landing page/img/upcoming/showcase-bg.jpg"
        class="card-img-top"
        alt="${movie.title}"
      />`
        }
      </div>
      <div>
        <h2>${movie.title}</h2>
        <p>
          <i class="fas fa-star text-primary"></i>
          ${movie.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Release Date: ${movie.release_date}</p>
        <p>
          ${movie.overview}
        </p>
        <h5>Genres</h5>
        <ul class="list-group">
          ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
        <a href="${
          movie.homepage
        }" target="_blank" class="btn">Visit Movie Homepage</a>
      </div>
    </div>
    <div class="details-bottom">
      <h2>Movie Info</h2>
      <ul>
        <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(
          movie.budget
        )}</li>
        <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(
          movie.revenue
        )}</li>
        <li><span class="text-secondary">Runtime:</span> ${
          movie.runtime
        } minutes</li>
        <li><span class="text-secondary">Status:</span> ${movie.status}</li>
      </ul>
      <h4>Production Companies</h4>
      <div class="list-group">
        ${movie.production_companies
          .map((company) => `<span>${company.name}</span>`)
          .join(', ')}
      </div>
    </div>
  `;

  // Append the created movie details content to the movie details container
  document.querySelector('#movie-details').appendChild(div);
}

// Function to display TV show details on the details page
async function displayShowDetails() {
  // Get show ID from URL query string
  const showId = window.location.search.split('=')[1];

  // Fetch TV show details data from TMDB API
  const show = await fetchAPIData(`tv/${showId}`);

  // Display background image overlay
  displayBackgroundImage('tv', show.backdrop_path);

  const div = document.createElement('div');

  // Create HTML content for TV show details
  div.innerHTML = `
    <div class="details-top">
      <div>
        ${
          show.poster_path
            ? `<img
          src="https://image.tmdb.org/t/p/w500${show.poster_path}"
          class="card-img-top"
          alt="${show.name}"
        />`
            : `<img
        src="./landing page/img/upcoming/showcase-bg.jpg"
        class="card-img-top"
        alt="${show.name}"
      />`
        }
      </div>
      <div>
        <h2>${show.name}</h2>
        <p>
          <i class="fas fa-star text-primary"></i>
          ${show.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
        <p>
          ${show.overview}
        </p>
        <h5>Genres</h5>
        <ul class="list-group">
          ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
        <a href="${
          show.homepage
        }" target="_blank" class="btn">Visit Show Homepage</a>
      </div>
    </div>
    <div class="details-bottom">
      <h2>Show Info</h2>
      <ul>
        <li><span class="text-secondary">Number of Episodes:</span> ${
          show.number_of_episodes
        }</li>
        <li><span class="text-secondary">Last Episode To Air:</span> ${
          show.last_episode_to_air.name
        }</li>
        <li><span class="text-secondary">Status:</span> ${show.status}</li>
      </ul>
      <h4>Production Companies</h4>
      <div class="list-group">
        ${show.production_companies
          .map((company) => `<span>${company.name}</span>`)
          .join(', ')}
      </div>
    </div>
  `;

  // Append the created TV show details content to the show details container
  document.querySelector('#show-details').appendChild(div);
}

// Function to display the backdrop image on details pages
function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.1';

  // Append the overlay div to the appropriate container based on type
  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  } else {
    document.querySelector('#show-details').appendChild(overlayDiv);
  }
}

// Function to search movies or TV shows
async function search() {
  // Get search query parameters from URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');

  // Perform search if search term is provided
  if (global.search.term !== '' && global.search.term !== null) {
    const { results, total_pages, page, total_results } = await searchAPIData();

    global.search.page = page;
    global.search.totalPages = total_pages;
    global.search.totalResults = total_results;

    // Display alert if no results are found
    if (results.length === 0) {
      showAlert('No results found');
      return;
    }

    // Display search results
    displaySearchResults(results);

    // Clear search term input field
    document.querySelector('#search-term').value = '';
  } else {
    showAlert('Please enter a search term');
  }
}

// Function to display search results
function displaySearchResults(results) {
  // Clear previous search results
  document.querySelector('#search-results').innerHTML = '';
  document.querySelector('#search-results-heading').innerHTML = '';
  document.querySelector('#pagination').innerHTML = '';

  // Iterate through the results and create HTML elements for each result
  results.forEach((result) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <a href="${global.search.type}-details.html?id=${result.id}">
              ${
                result.poster_path
                  ? `<img
                src="https://image.tmdb.org/t/p/w500${result.poster_path}"
                class="card-img-top"
                alt="${
                  global.search.type === 'movie' ? result.title : result.name
                }"
              />`
                  : `<img
              src="./landing page/img/upcoming/showcase-bg.jpg"
              class="card-img-top"
              alt="${
                global.search.type === 'movie' ? result.title : result.name
              }"
            />`
              }
            </a>
            <div class="card-body">
              <h5 class="card-title">${
                global.search.type === 'movie' ? result.title : result.name
              }</h5>
              <p class="card-text">
                <small class="text-muted">Release: ${
                  global.search.type === 'movie'
                    ? result.release_date
                    : result.first_air_date
                }</small>
              </p>
            </div>
          `;

    // Display the number of results found
    document.querySelector('#search-results-heading').innerHTML = `
                <h2>${results.length} of ${global.search.totalResults} Results for ${global.search.term}</h2>
      `;

    // Append the created search result card to the search results container
    document.querySelector('#search-results').appendChild(div);
  });

  // Display pagination for the search results
  displayPagination();
}

// Function to create and display pagination for search results
function displayPagination() {
  const div = document.createElement('div');
  div.classList.add('pagination');
  div.innerHTML = `
    <button class="btn btn-primary" id="prev">Prev</button>
    <button class="btn btn-primary" id="next">Next</button>
    <div class="page-counter">Page ${global.search.page} of ${global.search.totalPages}</div>
  `;

  document.querySelector('#pagination').appendChild(div);

  // Disable prev button if on the first page
  if (global.search.page === 1) {
    document.querySelector('#prev').disabled = true;
  }

  // Disable next button if on the last page
  if (global.search.page === global.search.totalPages) {
    document.querySelector('#next').disabled = true;
  }

  // Event listener for next page button
  document.querySelector('#next').addEventListener('click', async () => {
    global.search.page++;
    const { results, total_pages } = await searchAPIData();
    displaySearchResults(results);
  });

  // Event listener for previous page button
  document.querySelector('#prev').addEventListener('click', async () => {
    global.search.page--;
    const { results, total_pages } = await searchAPIData();
    displaySearchResults(results);
  });
}

// Function to fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  hideSpinner();

  return data;
}

// Function to make a request to search the TMDB API
async function searchAPIData() {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  showSpinner();

  const response = await fetch(
    `${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page}`
  );

  const data = await response.json();

  hideSpinner();

  return data;
}

// Function to show the loading spinner
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

// Function to hide the loading spinner
function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

// Function to highlight the active navigation link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// Function to show alert messages
function showAlert(message, className = 'error') {
  const alertEl = document.createElement('div');
  alertEl.classList.add('alert', className);
  alertEl.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertEl);

  // Remove alert after 3 seconds
  setTimeout(() => alertEl.remove(), 3000);
}

// Function to add commas to numbers for better readability
function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Function to initialize the app and display appropriate content based on the current page
function init() {
  switch (global.currentPage) {
   
    case '/home.html':
      displayPopularMovies();
      break;
    case '/shows.html':
      displayPopularShows();
      break;
    case '/movie-details.html':
      displayMovieDetails();
      break;
    case '/movies/movie-details.html':
      displayMovieDetails();
      break;
    case '/tv-details.html':
      displayShowDetails();
      break;
    case '/tv/tv-details.html':
      displayShowDetails();
      break;
    case '/search.html':
      search();
      break;
    case '/movies/upcoming-movies.html':
      displayUpcomingMovies();
      break;
    case '/movies/top-rated-movies.html':
      displayTopRatedMovies();
      break;
    case '/movies/now-playing-movies.html':
      displayNowPlayingMovies();
      break;
    case '/tv/top-rated-shows.html':
      displayTopRatedShows();
      break;
    case '/tv/airing-today.html':
      displayAiringTodayShows();
      break;
    case '/tv/on-the-air.html':
      displayOnTheAirShows();
      break;
  }

  // Highlight the active navigation link
  highlightActiveLink();
}

// Initialize the app when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
