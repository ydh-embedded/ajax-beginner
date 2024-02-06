/* var resObj = erzXHRObjekt(); */
var resObj = fXHR();

function sndReq( i ) {
    resObj.onreadystatechange = () => {
        handleResponse (i);
    }

    resObj.open("get", "info.xml", true );
    resObj.send(null);
}

function handleResponse( i ) {
    let daten   = null ;
    let info    = null ;
    let infoxml = null ;
    if( resObj.status === 200 && resObj.readyState === 4 ){
        daten = resObj.responseXML;         // statt responseText verwenden wir hier response XML
        console.log(daten);

        info = document.querySelector("#info" + i);
    //  infoxml = daten.querySelectorAll( "info" );                             // das daten liefert uns wieder ein DOM womit wir mit dem querySelector zugreifen können
        infoxml = daten.querySelectorAll( "info" )[i].firstChild.data;         // wir greifen auf den ersten info punkt drauf zu

        info.innerHTML = infoxml ;
        
    }
}

function out() {
    for( let i = 0; i < 3 ; i++){
          document.getElementById("info" + i ).innerHTML = "";
    }
}

function init() {
    const images = document.getElementsByTagName("img");
    for( let i = 0; i < images.length; i++) {
      images[i].onmouseover = () => { sndReq(i); }
      images[i].onmouseout = out;
    }
}

document.addEventListener("DOMContentLoaded", init);