// //display list of freelancers
// //display names
// //display occupation
// //display starting price
// //message displaying the average starting $$
// //every few seconds another freelancer is displayed
// //starting price updates wih new info

// const names = ["Betty", "Paul", "Susan", "Mike", "Beth", "Brian", "Lily"];
// const occupation = [
//   "landscaper",
//   "Tax Specialist",
//   "Plumber",
//   "Wedding Planner",
//   "Physical Trainer",
//   "Photographer",
//   "Dog Walker",
// ];
// const startingPrice = ["$15", "$30", "$45", "$50", "$75", "$60", "$80"];

// const body = document.querySelector("body");
// const section = document.createElement("section");
// section.style.display = "flex";
// section.style.flexWrap = "wrap";

// const getRandomElement = (array) =>
//   array[Math.floor(Math.random() * array.length)];

// const createFreelancerElement = (id) => {
//   const freelancerDiv = document.createElement("div");
//   freelancerDiv.id = id;
//   freelancerDiv.style.border = "1px solid #ccc";
//   freelancerDiv.style.padding = "20px";
//   freelancerDiv.style.margin = "10px";
//   freelancerDiv.style.width = "200px";

//   const randomName = getRandomElement(names);
//   const randomOccupation = getRandomElement(occupation);
//   const randomStartingPrice = getRandomElement(startingPrice);

//   freelancerDiv.innerHTML = `
//     <p><strong>Name:</strong> ${randomName}</p>;
//     <p><strong>Occupation:</strong> ${randomOccupation}</p>;
//     <p><strong>Starting Price:</strong> ${randomStartingPrice}</p>`;

//   return freelancerDiv;
// };

// const updateFreelancerContent = (id) => {
//   const freelancerElement = document.getElementById(id);

//   if (freelancerElement) {
//     freelancerElement.innerHTML = `
//         <p><strong>Name:</strong> ${getRandomElement(names)}</p>
//         <p><strong>Occupation:</strong> ${getRandomElement(occupation)}</p>
//         <p><strong>Starting Price:</strong> ${getRandomElement(
//           startingPrice
//         )}</p>
//       `;
//   }
// };

// const initializeFreelancers = () => {
//   const freelancer1 = createFreelancerElement("freelancer1");
//   const freelancer2 = createFreelancerElement("freelancer2");
//   const freelancer3 = createFreelancerElement("freelancer3");

//   section.append(freelancer1, freelancer2, freelancer3);
//   body.append(section);
// };

// const main = () => {
//   initializeFreelancers();

//   setInterval(() => {
//     updateFreelancerContent("freelancer1");
//     updateFreelancerContent("freelancer2");
//     updateFreelancerContent("freelancer3");
//   }, 2000);
// };

// main();


const names = ["Betty", "Paul", "Susan", "Mike", "Beth", "Brian", "Lily"];
const occupation = [
  "landscaper",
  "Tax Specialist",
  "Plumber",
  "Wedding Planner",
  "Physical Trainer",
  "Photographer",
  "Dog Walker",
];
const startingPrice = ["$15", "$30", "$45", "$50", "$75", "$60", "$80"];

const body = document.querySelector("body");
const section = document.createElement("section");
section.style.display = "flex";
section.style.flexWrap = "wrap";

const averagePriceDisplay = document.createElement("p");
averagePriceDisplay.style.fontWeight = "bold";
averagePriceDisplay.textContent = "Average Starting Price: $0";
body.appendChild(averagePriceDisplay);


const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const convertToNumber = (price) => parseInt(price.replace("$", ""));

const createFreelancerElement = (name, occupation, price) => {
  const freelancerDiv = document.createElement("div");
  freelancerDiv.style.border = "1px solid #ccc";
  freelancerDiv.style.padding = "20px";
  freelancerDiv.style.margin = "10px";
  freelancerDiv.style.width = "200px";
  
  freelancerDiv.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Occupation:</strong> ${occupation}</p>
    <p><strong>Starting Price:</strong> ${price}</p>
  `;
  
  return freelancerDiv;
};

let totalStartingPrice = 0;
let freelancerCount = 0;


const addExistingFreelancers = () => {
  const existingFreelancers = [
    { name: "Betty", occupation: "landscaper", startingPrice: "$15" },
    { name: "Paul", occupation: "Plumber", startingPrice: "$45" },
    { name: "Brian", occupation: "Wedding Planner", startingPrice: "$75" },
  ];

  existingFreelancers.forEach(freelancer => {
    const freelancerDiv = createFreelancerElement(
      freelancer.name,
      freelancer.occupation,
      freelancer.startingPrice
    );
    section.appendChild(freelancerDiv);
    
    totalStartingPrice += convertToNumber(freelancer.startingPrice);
    freelancerCount++;
  });
};

const addNewFreelancer = () => {
  const randomName = getRandomElement(names);
  const randomOccupation = getRandomElement(occupation);
  const randomStartingPrice = getRandomElement(startingPrice);

  const newFreelancerDiv = createFreelancerElement(
    randomName,
    randomOccupation,
    randomStartingPrice
  );
  section.appendChild(newFreelancerDiv);

  totalStartingPrice += convertToNumber(randomStartingPrice);
  freelancerCount++;

  const averagePrice = totalStartingPrice / freelancerCount;
  averagePriceDisplay.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
};

const initializeFreelancers = () => {
  addExistingFreelancers(); 
  body.appendChild(section);
};

const main = () => {
  initializeFreelancers();
  setInterval(addNewFreelancer, 2000);
};

document.addEventListener("DOMContentLoaded", main);



