// ----- Task 1 ----- //
// First button
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Title was changed!";
});

// Second button
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function() {
    taskOneHeading.classList.toggle("highlight");
});

// Third button
const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function() {
    animalText.textContent = "The text was changed!";
});

// Bonus 1 - add sentence
const addSentenceButton = document.querySelector("#addSentenceButton");

if (addSentenceButton) {
    addSentenceButton.addEventListener("click", function() {
        animalText.textContent += "Here is another sentence.";
    });
}

// Button 2 - change background
const changeBackgroundButton = document.querySelector("#changeBackgroundButton");

if (changeBackgroundButton) {
    changeBackgroundButton.addEventListener("click", function() {
        if (document.body.style.backgroundColor === "darkblue") {
            document.body.style.backgroundColor = "";
        } else {
            document.body.style.backgroundColor = "darkblue";
        }
    });
}

// ----- Task 2 ----- //
// Heading
const animalContent = document.querySelector("#animalContent");
const animalHeading = document.createElement("h3");

animalHeading.textContent = "Animal of the day";
animalHeading.classList.add("animal-heading");

// Paragraph
const animalParagraph = document.createElement("p");

animalParagraph.textContent = "Something interesting about that animal.";

// Image
const animalImg = document.createElement("img");

animalImg.src = "img/tiger.png";
animalImg.alt = "This is an alt text";

// Attach elements to page
animalContent.append(animalHeading, animalParagraph, animalImg);

// Event listeners for button
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function() {
    animalContent.style.display = "none";
});

showAnimalButton.addEventListener("click", function() {
    animalContent.style.display ="block";
});

// ----- Task 3 ----- //
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImg3 = document.querySelector("#animalImage");
const animalDesc = document.querySelector("#animalDescription");

// Data struct for each animal
const animals = {
    elephant: {
        name: "Elephant",
        src: "img/elephant.png",
        alt: "Elephant",
        desc: "This is an elephant."
    },
    tiger: {
        name: "Tiger",
        src: "img/tiger.png",
        alt: "Tigert",
        desc: "This is a tiger."
    },
    penguin: {
        name: "Penguin",
        src: "img/penguin.png",
        alt: "Penguin",
        desc: "This is a penguin."
    },
    panda: {
        name: "Panda",
        src: "img/panda.png",
        alt: "Panda",
        desc: "This is a Panda."
    }
};

// Change img, text, and alt based on user input via selection
animalSelect.addEventListener("change", function() {
    const selectedAnimal = animals[animalSelect.value];

    animalName.textContent = selectedAnimal.name;
    animalImg3.src = selectedAnimal.src;
    animalImg3.alt = selectedAnimal.alt;
    animalDesc.textContent = selectedAnimal.desc;
});

// Highlight image
animalImg3.addEventListener("mouseenter", function() {
    animalImg3.classList.add("image-highlight");
});

animalImg3.addEventListener("mouseleave", function() {
    animalImg3.classList.remove("image-highlight");
});

// ----- Task 4 ----- //
const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const animalValue = observationAnimal.value.trim();
    const locationValue = observationLocation.value.trim();
    const dateValue = observationDate.value.trim();

    // Check if field empty
    if (animalValue === "" || locationValue === "" || dateValue === "") {
        alert("Please fill in required fields before submitting.");
        return;
    }

    // Create table body structure
    const newRow = document.createElement("tr");

    const animalCell = document.createElement("td");
    animalCell.textContent = animalValue;

    const locationCell = document.createElement("td");
    locationCell.textContent = locationValue;

    const dateCell = document.createElement("td");
    dateCell.textContent = dateValue;

    newRow.append(animalCell, locationCell, dateCell);

    observationTableBody.append(newRow);

    animalForm.reset();
});