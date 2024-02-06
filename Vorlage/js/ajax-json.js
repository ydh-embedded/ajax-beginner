var resObj = erzXHRObjekt();

function sndReq( i ) {
    resObj.open( 'get', 'info-json.txt', true );
    resObj.onreadystatechange = function() {
        handleResponse( i );
    }
    resObj.send( null );
}

function handleResponse( i ) {
    var daten = null;
    if( resObj.readyState == 4 ) {       
        
    }
}

function out() {
    
}

function init() {
    
}

document.addEventListener("DOMContentLoaded", init);