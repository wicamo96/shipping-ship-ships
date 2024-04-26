// Import function from database.js that returns a copy of the docks portion of the database
import { getDocks } from "./database.js";

// Import function from database.js that returns a copy of the haulers portion of the database
import { getHaulers } from "./database.js";

// Invoke getDocks function and store the copied array in docks
const docks = getDocks();



// Create an event listener that displays information about the dock that was clicked
document.addEventListener("click", (click) => {
    // Assign the info about what was clicked in a variable called itemClicked
    const itemClicked = click.target;

    // Check that the dataset type of the itemClicked is dock
    if (itemClicked.dataset.type === "dock") {

        // Invoke function that returns a copy of the haulers array
        const allHaulers = getHaulers();

        // Store dockId in a variable to compare with allHaulers.dockId
        const dockId = parseInt(itemClicked.dataset.dockid);

        const dockInfo = docks.find(dock => dock.id === dockId);

        const haulerName = [];

        for (const hauler of allHaulers) {
            if (hauler.dockId === dockId) {
                haulerName.push(hauler.name);
            }
        }

        if (haulerName.length === 0) {
            window.alert(`The ${dockInfo.location} dock is currently unloading nothing`);
        }
        else if (haulerName.length === 1) {
            window.alert(`The ${dockInfo.location} dock is currently unloading ${haulerName[0]}`)
        }
        else {
            window.alert(`The ${dockInfo.location} dock is currently unloading ${haulerName[0]}, ${haulerName[1]}`)
        }    
    }
})



// Define and export a function that takes info from the database and formats it in html tags to be displayed on index.html
export const DockList = () => {

    // Create a variable to begin building the info formatted for HTML
    let docksHTML = `<ul>`;

    // Iterate through the docks array and format the location and volume data
    for (const dock of docks) {
        docksHTML += `
        <li data-type="dock" data-dockid="${dock.id}">${dock.location} can hold ${dock.volume} million tons of cargo</li>
        `;
    }

    // Close the unordered list we've been building in the docksHTML variable
    docksHTML += `</ul>`;

    // Return the docksHTML variable to be used in main.js
    return docksHTML;
}