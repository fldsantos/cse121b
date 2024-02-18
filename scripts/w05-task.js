/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples, filter) => {
    let oldDate = new Date(1950, 0, 1)
    temples.forEach((temple) => {
        let dedicatedDate = new Date(temple.dedicated)
        if (filter == "utah" && !temple.location.includes("Utah")){return}
        if (filter == "notutah" && temple.location.includes("Utah")){return}
        if (filter == "older" && dedicatedDate>oldDate){return}
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        let img = document.createElement('img')
        img.setAttribute('src', temple.imageUrl); 
        img.setAttribute('alt', temple.location);

        article.appendChild(h3)
        article.appendChild(img)
        templesElement.appendChild(article)
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    let data;
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if(response.ok) {
        data = await response.json();
        templeList = data;
    }
    filterTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = ''
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    let filter = document.getElementById("filtered").value;

    displayTemples(temples, filter)
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});


getTemples();
console.log(templeList)