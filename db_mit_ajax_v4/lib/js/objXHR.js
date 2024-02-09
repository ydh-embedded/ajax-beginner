            
    function fetchPersonInfo(perso_id) {                                                        // Wir wollen AJAX nutzen

        const objXHR = new XMLHttpRequest();
        objXHR.open('GET', 'includes/db.php?perso_id=' + perso_id, true);       // Schlüsselwort hier ist perso_id !
        objXHR.onload = function () {
            if (this.status === 200 && this.readyState === 4 ) {
                
                    console.log(this.status);
                    console.log(this.readyState);
                    console.log(this.responseText);

                daten = objXHR.responseText;

                document.getElementById('personInfo').innerHTML = this.responseText;            // Ausgabe der Perso information
            }
        };
        objXHR.send();
    }
    
    
    document.getElementById('persons').addEventListener('change', function () {                 // Event Listener am SELECT Event
        const perso_id = this.value;
        fetchPersonInfo(perso_id);
    });
    
    function outputPersonInfo(htmlTable) {
        document.getElementById('personInfo').innerHTML = htmlTable;
    }
    
    // fetchPersonInfo(1);