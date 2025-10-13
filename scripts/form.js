const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

//Footer logic

const current = document.querySelector("#currentyear");

const lastM = document.querySelector("#lastModified");

let lastModif = new Date(document.lastModified);

const today = new Date();

lastM.innerHTML = `Last modified: ${new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short"
}).format(lastModif)}`;

current.innerHTML = today.getFullYear();

//Function to insert dropdown options

const selectElement = document.querySelector("#product");
const form = document.querySelector(".rform1")
const countElement = document.querySelector("#count");
let count = 0;


products.forEach(product => {

    //Creating the option element
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
    
})

// Save submissions to localStorage
form.addEventListener("submit", () => {
    
    //Getting the current count from localStorage
    let count = Number(localStorage.getItem('submissionCount') || 0);
    
    //Increment counter per every submission
    count++;
    localStorage.setItem('submissionCount', count)

})
