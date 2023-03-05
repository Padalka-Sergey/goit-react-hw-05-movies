// /trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews - запрос обзоров для страницы кинофильма.

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '479d2ea313055d36744e81dfb1070205';

export function getTrendingMovies() {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${KEY}`).then(res =>
    res.json()
  );
}

export function getSearchMovies(searchQuery) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(
      new Error(`Фильмов с названием ${searchQuery} нет :(`)
    );
  });
}

export function getMovieDetails(muvieId) {
  return fetch(`${BASE_URL}/movie/${muvieId}?api_key=${KEY}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Фильма с ID ${muvieId} нет :(`));
  });
}

export function getMovieCast(muvieId) {
  return fetch(`${BASE_URL}/movie/${muvieId}/credits?api_key=${KEY}`).then(
    res => res.json()
  );
}

export function getMovieReviews(muvieId) {
  return fetch(`${BASE_URL}/movie/${muvieId}/reviews?api_key=${KEY}`).then(
    res => res.json()
  );
}
