//main
import renderMain from "./pages/main/main.js";
import renderMainResources from "./pages/main/mainResources.js";
import renderMainHeader from "./pages/main/mainHeader.js";
// movie
import renderMovie from "./pages/movie/movie.js";
// program
import renderProgram from "./pages/program/program.js"
import renderProgramResources from "./pages/program/resources.js"
// dashboard
import renderCinemaDashboardHeader from "./pages/dashboard/header.js";
import renderCinemaDashboard from "./pages/dashboard/dashboard.js";
// dashboard/movies
import renderCinemaMovies from "./pages/cinemaMovies/cinemaMoviesHtml.js";
import getCinemaMoviesScripts from "./pages/cinemaMovies/cinemaMoviesJs.js";
import renderCinemaMoviesResources from "./pages/cinemaMovies/resources.js"
// dashboard/playing
import renderCinemaMoviesPlaying from "./pages/cinemaMoviesPlaying/cinemaMoviesPlaying.js";
// dashboard/shows
import renderCinemaShows from "./pages/cinemaShows/cinemaShows.js";

//cleaning funciton 
import clearHeadLinks from "./resources/js/clearHeadLinks.js";


export default function () {
    const router = new Navigo("/", { hash: true });

    router
        .on({
            "/": () => {
                //will remove all content of <head>
                clearHeadLinks();
                renderMainResources();
                renderMainHeader();
                renderMain().then(router.updatePageLinks);
            },
            "/movie/:id": (params) => {
                //will remove all content of <head>
                clearHeadLinks();
                renderMainResources();
                renderMainHeader();
                renderMovie(params).then(router.updatePageLinks);
            },
            "/program": () => {
                //will remove all content of <head>
                clearHeadLinks();
                renderMainResources();
                renderProgramResources();
                renderMainHeader();
                renderProgram().then(router.updatePageLinks);
            },
            "/dashboard": () => {
                //will remove all content of <head>
                clearHeadLinks();
                renderCinemaDashboardHeader();
                renderCinemaDashboard();
            },
            "/dashboard/movies": () => {
                //will remove all content of <head>
                clearHeadLinks();
                renderCinemaDashboardHeader();
                renderCinemaMoviesResources();
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