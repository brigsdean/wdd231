
let currentYear = document.querySelector("#currentyear");

const todaysDate = new Date();

currentYear.innerHTML = `<span class="currentYear">${todaysDate.getFullYear()}</span>`

let lastMod = document.querySelector("#lastModified");

const dateLastMod = document.lastModified;

document.getElementById("lastModified").innerHTML = `Last Modified: <span class="lastMod">${dateLastMod}</span>`
