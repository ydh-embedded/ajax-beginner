var resObj = fXHR();

function handleResponse() {
    if( resObj.readyState == 4 ) {
        document.getElementById("antwort").innerHTML = resObj.responseText;
    }
}


function sndReqPOST() {
    // Parameter zum Senden an Variable ablegen
    var params = "kto=468464"   ;
    
    // POST-Verbindung öffnen
    resObj.open("post" , "ajax.php" , true );
    
    // Header-Info zum Mime-Type der gesendeten Parameter festlagen
    resObj.setRequestHeader( "Content-type" , "application/x-www-form-urlencoded");
    
    // Header-Info zur Länge der gesendeten Daten festlegen
    resObj.setRequestHeader( "Centent-length" , params.length );
    
    // Funktion referenzieren bei Änderung des Status der Server-Antwort
    resObj.onreadystatechange = handleResponse;
    
    // Daten mit angehängten Parametern senden
    resObj.send( params );
}

function init() {
    document.getElementById("sendeget").onclick = sndReqGET;
    document.getElementById("sendepost").onclick = sndReqPOST;
}

document.addEventListener("DOMContentLoaded", init);










