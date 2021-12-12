function addActorToList() {
    const form = document.querySelector("#movieForm");
    let actor = {
        firstName = document.querySelector("#firstName").value,
        lastName = document.querySelector("#lastName").value
    };
    let actorArray = Array.from(form.actorList);
    actorArray.push(actor);
    console.log(actorArray);
}
let addActorButton = document.querySelector("#actorSubmit");
addActorButton.addEventListener("click", addActorToList);