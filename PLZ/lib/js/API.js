const resObj = new XMLHttpRequest();


search.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector("#search");
    const LIST = document.querySelector("#LIST tbody");
    search.addEventListener("keyup" , () =>{
        searchTelNumbers( search.value );
    });
});

function searchTelNumbers(val) {
    fetch(`includes/phonebook.php?val=${encodeURIComponent(val)}`)
        .then(response => response.json())
        .then(nbrList => {
            if (!nbrList.length) {
                LIST.innerHTML = "<tr><td colspan='2'>Bitte noch ein Zeichen eingeben</td></tr>";
            } else {
                LIST.innerHTML = nbrList.map(nbr => `<tr><td>${nbr.name}</td><td>${nbr.phoneNumber}</td></tr>`).join("");
            }
        });
}
