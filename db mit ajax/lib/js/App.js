//#region /* variablen und constanten */
const objXHR =  new XMLHttpRequest();
let stringInput             = ""    ;
let stringElementOutput     = ""    ;
//#endregion
//#region /* event Listener */
document.addEventListener("DOMContentLoaded" , _ => {

    stringInput             = document.querySelector    ("#search") ;
    stringElementOutput    = document.querySelector    ("#output") ;

    stringInput.addEventListener ("keyup" , fnCallPHP);

})
//#endregion
//#region /* functionen */
function fnCallPHP(){
    let sInputValue = stringInput.value;
    let sURI        = "includes/db.php?q=" + encodeURIComponent ( sInputValue );
    objXHR.open     ( "get" , sURI , true );
    objXHR.onload   = fnUpdatePage;
    objXHR.send     ( null );
}

function fnUpdatePage(){

    let objResponse = null ;
    let stringOutput =  "" ;
    try{
        
        if( objResponse = JSON.parse ( objXHR.responseText)){
            console.log('Der json String konnte erzeugt werden');
            for( intROW in objResponse){
                console.log(objResponse[intROW].perso_id);
                
                stringOutput += "<tr>";

                stringOutput += "<td>" + objResponse[intROW].perso_id           + "</td>";
                stringOutput += "<td>" + objResponse[intROW].perso_firstname    + "</td>";
                stringOutput += "<td>" + objResponse[intROW].perso_lastname     + "</td>";
                stringOutput += "<td>" + objResponse[intROW].perso_age          + "</td>";
                stringOutput += "<td>" + objResponse[intROW].perso_hometown     + "</td>";
                stringOutput += "<td>" + objResponse[intROW].perso_job          + "</td>";

                stringOutput += "</td>";
            }
        }
        
    } catch(error){
        stringOutput = "kein json String wurde erzeugt" + error;
    }
    stringElementOutput.innerHTML = stringOutput ;
}
//#endregion