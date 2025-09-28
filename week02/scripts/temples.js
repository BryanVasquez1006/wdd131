// getting the dates for the dynamic footer

const current = document.querySelector("#currentyear");

const lastM = document.querySelector("#lastModified");

let lastModif = new Date(document.lastModified);

const today = new Date();

lastM.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short"
}).format(lastModif)}`;

current.innerHTML = today.getFullYear();


//Setting the logic for the menu

const hamButton = document.querySelector("#mobile-menu-icon");

const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})