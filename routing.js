import renderMain from "./pages/main/main.js";

import renderMovie from "./pages/movie/movie.js";

import renderShows from "./pages/shows/shows.js";

import renderCinemaDashboardHeader from "./pages/cinemaDashboard/cinemaDashboardHeader.js";
import renderCinemaDashboard from "./pages/cinemaDashboard/cinemaDashboard.js";

import renderCinemaMovies from "./pages/cinemaMovies/cinemaMoviesHtml.js";
import getCinemaMoviesFunctions from "./pages/cinemaMovies/cinemaMoviesJs.js";

import renderCinemaMoviesPlaying from "./pages/cinemaMoviesPlaying/cinemaMoviesPlaying.js";

import renderCinemaShows from "./pages/cinemaShows/cinemaShows.js";

import renderLogin from "./pages/login/login.js"


export default function () {
    const router = new Navigo("/", { hash: true });

    router
        .on({
            "/": () => {
                renderMain().then(router.updatePageLinks);
            },
            "/movie/:id": () => {
                renderMovie()
            },
            login: () => {
                renderLogin();
            },
            movie: () => {
                renderMovie();
            },
            shows: () => {
                renderShows();
            },
            cinemaDashboard: () => {
                renderCinemaDashboardHeader().then(router.updatePageLinks);
                renderCinemaDashboard();
            },
            cinemaMovies: () => {
                renderCinemaMovies();
                getCinemaMoviesFunctions();
            },
            cinemaMoviesPlaying: () => {
                renderCinemaMoviesPlaying();
            },
            cinemaShows: () => {
                renderCinemaShows();
            }
        })
        .resolve();
}