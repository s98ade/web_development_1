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



// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE



// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT



// listener for the select element from the drop down list.


    // function to update the DOM based on the selected animal