var resObj = erzXHRObjekt();

function sndReq(i) {
  switch (i) {
    case 0:
      resObj.open("get", "info0.txt",true);
      break;
    case 1:
      resObj.open("get", "info1.txt",true);
      break;
    case 2:
      resObj.open("get", "info2.txt",true);
      break;
  }
  resObj.onreadystatechange = () => {           // eine functionreferenz wird ohne klammern angegeben
    handleResponse(i);                          // man ruft eine anonyme function auf um diese ausgeführt werden soll wenn das ereignis auftritt
  }                                             // wir rufen handleResponse mit dem parameter i auf
  resObj.send(null);
}

function handleResponse(i) {
    if( resObj.status === 200 && resObj.readyState === 4){
      document.getElementById("info" +  i ).innerHTML = resObj.responseText;
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

window.onload = init;