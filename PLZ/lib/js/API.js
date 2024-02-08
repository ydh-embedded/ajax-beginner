const resObj = new XMLHttpRequest();


search.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector("#search");
    const output = document.querySelector("#output tbody");
    search.addEventListener("keyup" , () =>{
        searchTelNumbers( search.value );
    });
});

function searchTelNumbers(val) {
    fetch(`includes/phonebook.php?val=${encodeURIComponent(val)}`)
        .then(response => response.json())
        .then(nbrList => {
            if (!nbrList.length) {
                output.innerHTML = "<tr><td colspan='2'>Bitte noch ein Zeichen eingeben</td></tr>";
            } else {
                output.innerHTML = nbrList.map(nbr => `<tr><td>${nbr.name}</td><td>${nbr.phoneNumber}</td></tr>`).join("");
            }
        });
}
