// Import function that returns a copy of the cargoShips portion of the database
import { getShips } from "./database.js";

// Import function that returns a copy of the hauler ships portion of the database
import { getHaulers } from "./database.js";


// Create a listener that checks if a cargo ship was clicked and displays a message about that cargo ship
document.addEventListener("click", (click) => {
    // Assign info about what was clicked to the variable itemClicked
    const itemClicked = click.target;

    // Check if what was clicked is a ship
    if (itemClicked.dataset.type === "ship") {

        // Pull the hauler id from the info stored in itemClicked
        const haulerId = itemClicked.dataset.haulerid;

        // Invoke getHaulers to get an array of all the haulers
        const allHaulers = getHaulers();

        // use the array.find method to pull the info about the hauler that hauls the cargo ship that was clicked
        const hauler = allHaulers.find(hauler => hauler.id === parseInt(haulerId));

        // Display a message about which hauler hauls the cargo ship that was clicked
        window.alert(`${itemClicked.innerHTML} is being hauled by ${hauler.name}`);
    }
})


// Define and export a function that formats cargo ship info with html tags
export const shipList = () => {

    // Invoke function that returns a copy of the cargoShips array and store in the variable allShips
    const allShips = getShips();

    // Declare a variable to begin storing the formatted info with html tags
    let shipHTML = `<ul>`;

    // Iterate through allShips array and extract info and format it with html tags
    for (const ship of allShips) {
        shipHTML += `
            <li data-type="ship" data-haulerid="${ship.haulerId}">${ship.name}</li>
        `;
    }

    // Close the unordered list containing the ship info
    shipHTML += `</ul>`;

    // Return the ship info formatted with html tags
    return shipHTML;
}