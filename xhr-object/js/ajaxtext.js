const resObj = erzXHRObjekt();                                          // var resObj = erzXHRObjekt();

function sndReq() {                                                     // Callback-Function
    resObj.onreadystatechange = handleResponse;                         // Ereignisshandler onreadystatechange

    resObj.open( 'get' , 'antwort.txt' , true );                        // Wir übergeben der Methode open folgende parameter get , antwort.txt , asynchron aktivieren mit true

    resObj.send( null );                                                // Hier würde bei der POST außer der Anfrage noch mehr stehen können (statt null)


}

function handleResponse() {                                             // Verarbeitung der Antwort des Servers

    if( resObj.status == 200 && resObj.onreadystatechange === 4 ){      // 4 Die angefragten DAten sind komplett am xhr Object angekommen 200 Datei ist am Server vorhanden
        let antwort = document.getElementById("antwort");
        antwort.innerHTML = resObj.responeText;

        antwort.innerHTML += "Status: " + resObj.status
                        + "Status-Text: " + resObj.statusText
                        + "readyState: " + resObj.readyState
                        + "Header-Infos" + resObj.getAllResponseHeaders();

        readyState + "Header-Info: " + resObj.getAllResponseHeaders();
    }

}

function init() {
    document.getElementById("frage").onclick = sndReq;
}

document.addEventListener("DOMContentLoaded", init);