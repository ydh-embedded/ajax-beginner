/* variablen und constanten */
const objXHR = new XMLHttpRequest();
let stringInput     = ""    ;
let stringOutput    = ""    ;
/* event Listener */
document.addEventListener("DOMContentLoaded" , _ => {
    stringInput = document.querySelector("#input") ;
    stringOutput = document.querySelector("#output") ;

    stringInput.addEventListener("keyup" , fnCallPHP)

})
/* functionen */
function fnCallPHP(){
    let sInputValue = stringInput.value;
    let sURI        = "includes/plz.php?q=" + encodeURIComponent ( sInputValue );
    objXHR.open     ( "get" , sURI , true );
    objXHR.onload   = fnUpdatePage;
    objXHR.send     ( null )
}

function fnUpdatePage(){

    let objResponse = null ;
    let stringOutput =  "" ;
    try{
        if( objResponse = JSON.parse ( objXHR.responseText)){
            console.log('Der json String konnte erzeugt werden');

            for( objROW in objResponse){
                stringOutput += "<tr>";






                stringOutput += "</tr>";
            }





        }
    } catch(error){
        stringOutput = "kein json String wurde erzeugt";
    }
}