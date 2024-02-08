const personSelect = document.querySelector("#personSelect");
const personInfo = document.querySelector("#personInfo");

// Fetch the list of persons from the database
fetch("includes/db.php")
    .then(response => response.json())
    .then(data => {
        // Generate the option elements for the dropdown list
        data.persons.forEach(person => {
            const option = document.createElement("option");
            option.value = person.id;
            option.textContent = person.firstname + " " + person.lastname;
            personSelect.appendChild(option);
        });

        // Add an event listener for when a person is selected
        personSelect.addEventListener("change", () => {
            const selectedPersonId = personSelect.value;

            // Fetch the information for the selected person
            fetch("includes/db.php?id=" + selectedPersonId)
                .then(response => response.text())
                .then(data => {
                    // Display the person information
                    personInfo.innerHTML = data;
                });
        });
    });