import renderMain from "./pages/main/main.js";
import renderMainResources from "./pages/main/mainResources.js";
import renderMainHeader from "./pages/main/mainHeader.js";

import renderMovie from "./pages/movie/movie.js";

import renderShows from "./pages/shows/shows.js";

import renderProgram from "./pages/program/program.js"

import renderCinemaDashboardHeader from "./pages/cinemaDashboard/cinemaDashboardHeader.js";
import renderCinemaDashboard from "./pages/cinemaDashboard/cinemaDashboard.js";

import renderCinemaMovies from "./pages/cinemaMovies/cinemaMoviesHtml.js";
import getCinemaMoviesScripts from "./pages/cinemaMovies/cinemaMoviesJs.js";

import renderCinemaMoviesPlaying from "./pages/cinemaMoviesPlaying/cinemaMoviesPlaying.js";

import renderCinemaShows from "./pages/cinemaShows/cinemaShows.js";

import renderLogin from "./pages/login/login.js"


export default function () {
    const router = new Navigo("/", { hash: true });

    router
        .on({
            "/": () => {
                renderMain().then(router.updatePageLinks);
                renderMainResources();
                renderMainHeader();                
            },
            "/movie/:id": (params) => {
                renderMovie(params).then(router.updatePageLinks);
            },
            "/program": () => {
                renderProgram();
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
                renderCinemaDashboardHeader();
                renderCinemaDashboard();
            },
            cinemaMovies: () => {
                renderCinemaDashboardHeader();
                renderCinemaMovies();
                getCinemaMoviesScripts();
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