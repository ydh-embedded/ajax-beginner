var resObj = fXHR();

function handleResponse() {
    if( resObj.readyState == 4 ) {
        document.getElementById("antwort").innerHTML = resObj.responseText;
    }
}

function sndReqGET() {
    // Parameter zum Senden in Variable ablegen
    var params = "user=admin&passwort=geheim";
    
    // GET-Verbindung öffnen
    resObj.open( "get" , "ajax.php?" + params, true);
    resObj.onreadystatechange = handleResponse;
    resObj.send(null);
}

function sndReqPOST() {
    // Parameter zum Senden an Variable ablegen
    var params = "kto=468464"
    
    // POST-Verbindung öffnen
    resObj.open("post" , "ajax.php" , true );
    
    // Header-Info zum Mime-Type der gesendeten Parameter festlagen
    
    
    // Header-Info zur Länge der gesendeten Daten festlegen
    
    
    // Funktion referenzieren bei Änderung des Status der Server-Antwort
    
    
    // Daten mit angehängten Parametern senden
    
}

function init() {
    document.getElementById("sendeget").onclick = sndReqGET;
    document.getElementById("sendepost").onclick = sndReqPOST;
}

document.addEventListener("DOMContentLoaded", init);










