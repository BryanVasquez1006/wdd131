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

// Temples object

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "San Salvador",
    location: "El Salvador",
    dedicated: "2011, August, 21",
    area: 27986,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/8c084fef6033bfd96c430cec43236af0b41740f5/full/640%2C/0/default"
  },

  {
    templeName: "San Juan Puerto Rico",
    location: "Puerto Rico",
    dedicated: "2023, January, 15",
    area: 6988,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/b8e8764466cb11eda40eeeeeac1ead22054ff7fc/full/500%2C/0/default"
  },

  {
    templeName: "Provo Utah Rock Canyon",
    location: "Provo Utah",
    dedicated: "1972, February, 9",
    area: 130825,
    imageUrl:"https://www.churchofjesuschrist.org/imgs/d372f50d13a611ef9f0ceeeeac1eec7ada817542/full/640%2C/0/default"
  },
];

//Function to create the cards template
function templeCard(temple) {
  return `<figure class="card">
            <figcaption>${temple.templeName}</figcaption>
            <p><strong>Location</strong> ${temple.location}</p>
            <p><strong>Dedication</strong> ${temple.dedicated}</p>
            <p><strong>Area</strong> ${temple.area} sq ft</p>
            <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
            </figure>`
}

// Inserting the cards on the section

function renderCards(temples) {
  const html = temples.map(templeCard);
  document.querySelector("main div").innerHTML = html.join("");
}

renderCards(temples);

//Filtering temples logic


//Temples older than 1900
const oldTemplesLink = document.querySelector("#oldTemples");

oldTemplesLink.addEventListener("click", () => {
  event.preventDefault()
  let oldTemples = temples.filter( temple => {
    const year = new Date(temple.dedicated).getFullYear();
    return year < 1900;
  });
  renderCards(oldTemples);
});


//New temples above 2000
const newTemplesLink = document.querySelector("#newTemples");

newTemplesLink.addEventListener("click", () => {
  event.preventDefault()
  let newTemples = temples.filter( temple => {
    const year = new Date(temple.dedicated).getFullYear();
    return year > 2000;
  });
  renderCards(newTemples);
});

const largeTemplesLink = document.querySelector("#largeTemples");

largeTemplesLink.addEventListener("click", () => {
  event.preventDefault();
  let largeTemples = temples.filter(temple => {
    return temple.area >= 90000;
  });
  renderCards(largeTemples);
});

const smallTemplesLink = document.querySelector("#smallTemples");

smallTemplesLink.addEventListener("click", () => {
  event.preventDefault();
  let smallTemples = temples.filter(temple => {
    return temple.area <10000;
  });
  renderCards(smallTemples);
});

const home = document.querySelector("#home");

home.addEventListener("click", () => {
  event.preventDefault();
  renderCards(temples);
});