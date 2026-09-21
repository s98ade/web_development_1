// Exercise 1
function showTable() {
    const animals = [
        {animal: "Tiger", habitat: "Forest", diet: "Carnivore"},
        {animal: "Elephant", habitat: "Savanna", diet: "Herbivore"}
    ];

    let rowsHtml = "";
    for (const {animal, habitat, diet} of animals) {
        rowsHtml +=
        `<tr>
            <td>${animal}</td>
            <td>${habitat}</td>
            <td>${diet}</td>
        </tr>`;
    }

    const tableHtml =
    `<table>
        <thead>
            <tr>
                <th>Animal</th>
                <th>Habitat</th>
                <th>Diet</th>
            </tr>
        </thead>
        <tbody>
            ${rowsHtml}
        </tbody>
    </table>
    `;

    const container = document.querySelector("#tableContainer");
    container.innerHTML = tableHtml;
}

// Exercise 2
const heading1 = document.querySelector("#heading1");
const heading2 = document.querySelector("#heading2");

heading1.addEventListener("mouseover", function() {
    console.log("Stepped over me with a mouse!");
});

heading1.addEventListener("click", function() {
    heading1.style.color = "red";
    heading1.innerHTML = "Bye bye mouse!";
});

// Exercise 3
const MAX_CHARS = 10;

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charCount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

if (feedback) {
    feedback.addEventListener("focus", function() {
        if (status) {
            status.textContent = "Editting feedback...";
        }
        feedback.style.backgroundColor = "#fffbe6";
    });

    feedback.addEventListener("blur", function() {
        if (status) {
            status.textContent = "";
        }
        feedback.style.backgroundColor = "";
    });

    feedback.addEventListener("input", function() {
        const text = feedback.value;
        const length = text.length;

        if (charCount) {
            charCount.textContent = `${length}/${MAX_CHARS}`;
        }

        if (preview) {
            if (text === "") {
                preview.textContent = "(The preview will appear here)";
            } else {
                preview.textContent = text;
            }
        }
    });
}

// Exercise 4
const MIN_CHARS = 1;
const feedbackForm = document.querySelector("#feedbackForm");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const text = feedback.value.trim();
        const length = text.length;

        if (length < MIN_CHARS || length > MAX_CHARS) {
            if (status) {
                status.textContent = `Feedback must be between ${MIN_CHARS} and ${MAX_CHARS} characters.`;
                status.style.color = "red";
            }
            return;
        }

        feedback.value = "";
        if (charCount) {
            charCount.textContent = `0/${MAX_CHARS}`;
        }
        if (preview) {
            preview.textContent = "The preview will appear here";
        }
        if (status) {
            status.textContent = "Thank you for your feedback!";
            status.style.color = "green";
        }
    });
}