export default function () {
    const router = new Navigo("/", { hash: true });
  
    router
      .on({
        "/": () => {
            console.log("Hello");
        }
    })
}