//#region /* variablen und constanten */
const stringInput = document.querySelector("#search");
const stringElementOutput = document.querySelector("#output");
//#endregion
//#region /* event Listener */
document.addEventListener("DOMContentLoaded", () => {
  stringInput.addEventListener("keyup", fnCallPHP);
});
//#endregion
//#region /* functionen */
async function fnCallPHP() {
  const sInputValue = stringInput.value;
  const sURI = "../includes/db.php?q=" + encodeURIComponent(sInputValue);
  console.log("Wir geben sURI an: " + sURI);

  try {
    const response = await fetch(sURI);
    const text = await response.text();
    stringElementOutput.innerHTML = text;
  } catch (error) {
    stringElementOutput.innerHTML = "App.js:52 - Kein json String wurde erzeugt: " + error;
    console.dir(document.table);
    console.trace();
  }
}
//#endregion