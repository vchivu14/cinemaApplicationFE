import renderCinemaMovies from "./pages/cinemaMovies/cinemaMovies.js";
import renderMain from "./pages/main/main.js";

export default function () {
    const router = new Navigo("/", { hash: true });
  
    router
      .on({
        "/": () => {
            console.log("Hello");
        },
        cinemaMovies: () => {
            renderCinemaMovies();
        },
        main: () => {
            renderMain().then(router.updatePageLinks);
        }
    })
    .resolve();
}