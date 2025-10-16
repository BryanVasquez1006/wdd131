const hamMenu = document.querySelector("#menu");
const mobNav = document.querySelector("#mobNav");

hamMenu.addEventListener("click", ()=> {
    mobNav.classList.toggle("open");
    hamMenu.classList.toggle("open");
})

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


//FORM LOGIC

const contactMethods = [
  {
    id: 1,
    contactMethod: "Email"
  },
  {
    id: 2,
    contactMethod: "Phone Call"
  },
  {
    id: 3,
    contactMethod: "Text Message"
  },
  {
    id: 4,
    contactMethod: "Live Chat"
  },
  {
    id: 5,
    contactMethod: "Contact Form"
  },
  {
    id: 6,
    contactMethod: "Social Media (e.g. Facebook, Twitter, Instagram)"
  },
  {
    id: 7,
    contactMethod: "Support Ticket"
  },
  {
    id: 8,
    contactMethod: "Video Call"
  },
  {
    id: 9,
    contactMethod: "Community Forum"
  },
  {
    id: 10,
    contactMethod: "WhatsApp or Messenger"
  }
];

// Select the dropdown element
const dropdown = document.getElementById("contactMethod");

// Populate it dynamically
contactMethods.forEach(method => {
  const option = document.createElement("option");
  option.value = method.id;
  option.textContent = method.contactMethod;
  dropdown.appendChild(option);
});

form = document.querySelector(".rform1")

form.addEventListener("submit", () => {
    
    //Getting the current count from localStorage
    let count = Number(localStorage.getItem('submissionCount') || 0);
    
    //Increment counter per every submission
    count++;
    localStorage.setItem('submissionCount', count)

});
