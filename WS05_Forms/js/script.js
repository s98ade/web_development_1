// WS05 student starter
// Complete the TODOs. This file is intentionally unfinished.

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");
const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

// Exercises 1 and 3
animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";
    animalName.classList.remove("invalid");
    animalSpecies.classList.remove("invalid");
    careNote.classList.remove("invalid");

    // Read and trim values
    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();

    // Validate and throw error
    let valid = true;

    if(name === "") {
        nameError.textContent = "Please enter a name.";
        animalName.classList.add("invalid");
        valid = false;
    }

    if(species === "") {
        speciesError.textContent = "Please enter a species.";
        animalSpecies.classList.add("invalid");
        valid = false;
    }

    if(note.length < 1 || note.length > 150) {
        noteError.textContent = "Note must be between 1-150 characters.";
        careNote.classList.add("invalid");
        valid = false;
    }

    if(!valid) {
        return;
    }

    // Happy path
    formResult.textContent = name + " (" + species + "): " + note;

    // Create object, turn to JSON and save
    const animal = {name: name, species: species, note:note};
    localStorage.setItem("ws05Animal", JSON.stringify(animal));
});

// Exercise 2
const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Read value and convert to int
    const fee = Number(animalType.value);
    const years = Number(yearsInput.value);

    // Check if int valid (only whole, positive numbers)
    if(!Number.isInteger(years) || years < 1) {
        cost.textContent = "Total: not calculated yet.";
        discountMessage.textContent = "Invalid input";
        return;
    }

    // Calculate price and apply discounts
    const fullPrice = fee * years;
    let total = fullPrice;
    discountMessage.textContent = "No discount.";

    if(years > 2) {
        total = total * 0.8;
        discountMessage.textContent = "20% discount applied.";
    }

    if(years >= 5) {
        total = total - 5;
        discountMessage.textContent = "20% discount + 5€ extra discount applied.";
    }

    // Show and save results
    const saved = fullPrice - total;
    cost.textContent = "Total: €" + total.toFixed(2);
    if(saved > 0) {
        discountMessage.textContent += " You saved €" + saved.toFixed(2) + ".";
    }
});

// Exercise 4
const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

function loadAnimal() {
    // Read ws05Animal, check for null
    const saved = localStorage.getItem("ws05Animal");

    if(saved === null) {
        savedAnimal.textContent = "No content.";
        return;
    }

    // Display details
    const animal = JSON.parse(saved);
    savedAnimal.textContent = animal.name + " (" + animal.species + "): " + animal.note;
}

loadButton.addEventListener("click", loadAnimal);
clearButton.addEventListener("click", function () {
    // Remove ws05Animal and update the displayed results
    localStorage.removeItem("ws05Animal");
    loadAnimal();
});

loadAnimal();