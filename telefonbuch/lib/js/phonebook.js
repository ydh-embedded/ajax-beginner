document.addEventListener("DOMContentLoaded", () => {
    const search = document.querySelector("#search");
    const LIST = document.querySelector("#LIST");
    
    search.addEventListener("keyup" , () =>{
        searchTelNumbers( search.value );
    });
});

function searchTelNumbers ( val ){
    resObj.open( "get" , "includes/phonebook.php?val=" + encodeURIComponent ( val ) , true );
    resObj.onreadystatechange = handleResponse ;
    resObj.send (null);
}

function handleResponse (){
    let nbrList = null ;
    let output  = "" ;

    if( resObj.status === 200 && resObj.readyState === 4 ){
        if ( ! resObj.responseText){
            output = "Bitte noch ein Zeichen eingeben";
        }else {
            
        }

        list.innerHTML = output;
    }
}