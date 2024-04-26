// Import function that returns a copy of the hauling ships array
import { getHaulers } from "./database.js";

// Import function that returns a copy of the cargo ships array
import { getShips } from "./database.js";



//Create an event listener to display a message about how many shipping ships a hauler is shipping when clicked
document.addEventListener("click", (click) => {
    
    // Store the info of what was clicked in the variable itemClicked
    const itemClicked = click.target;

    // Invoke the function that returns a copy of the cargo ships array to cross reference later
    const cargoShips = getShips();

    // Check the dataset to see if the item clicked was one of the haulers
    if (itemClicked.dataset.type === "hauler") {
        // Store the haulerId from the hauler that was clicked. parseInt necessary as its displayed as a string
        const haulerId = parseInt(itemClicked.dataset.haulerid);

        // Assign a variable called counter to 0 to store the number of shipping ships a hauler hauls in the next step
        let counter = 0;
        
        // Iterate through the cargoShips array
        for (const ship of cargoShips) {
            
            // Compare the id of the hauler that the shipping ship is tied to and see if it matches the id of the hauler that was clicked
            if (haulerId === ship.haulerId) {
                // They match, add one to the counter
                counter += 1;
            }
        }
        // Display the number of shipping ships that the hauler that was clicked on hauls
        window.alert(`This hauler is carrying ${counter} shipping ships`);
    } 
})



// Declare and export function that formats and returns hauling ship data with HTML tags
export const haulerList = () => {

    // Invoke function that returns a copy of the hauling ships array and store in the allHaulers veriable
    const allHaulers = getHaulers();

    // Create a variable that stores data formatted with html tags
    let haulerHTML = `<ul>`;

    // Iterate through allHaulers array and pull data to continue building html formatted info
    for (const hauler of allHaulers) {
        haulerHTML += `
            <li data-type="hauler" data-haulerId="${hauler.id}">${hauler.name}</li>
        `;
    }

    // Close the unordered list
    haulerHTML += `</ul>`;

    // Return html formatted info
    return haulerHTML;
}