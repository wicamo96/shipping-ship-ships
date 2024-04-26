// Import function that populates html using data from the db.docks array
import { DockList } from "./dockList.js";

// Import function that populates html using data from the db.haulingShips array
import { haulerList } from "./haulerList.js";

// Import function that populates html using data from the db.cargoShip array
import { shipList } from "./shipList.js";



// Find the section in the html to display the dock data and store in a variable called dockInsertHTML
const dockInsertHTML = document.querySelector("#dockInsert");

// Invoke the DockList function and display the data in the section of the index page with the id of dockInsert
dockInsertHTML.innerHTML = DockList();



// Find the section in the html to display the hauler data and store in a variable called haulerInsertHTML
const haulerInsertHTML = document.querySelector("#haulerInsert");

// Invoke the haulerList function and display the data in the section of the index page with the id of haulerInsert
haulerInsertHTML.innerHTML = haulerList();



// Find the section in the html to display the cargo ship data and store in a variable called cargoInsertHTML
const cargoInsertHTML = document.querySelector("#cargoInsert");

// Invoke the shipList function and display the data in the section of the index page with the id of cargoInsert
cargoInsertHTML.innerHTML = shipList();