# AJAX

## Step 1

-   Wir erstellen eine php - Datei um die Verbindng mit dem Server herzustellen
-   Verzeichniss: ***includes/db.php***
  
## Step 2

-   Wir starten mit ***index.html***
-   Über select greifen wir auf eine Auswahl der Personen zu


## Step 3

-   Nutzereingabe vergleichen
-   Verzeichniss: ***includes/db.php***
-   wir schauen ob der Query-Schlüssel  <code>$_GET</code> Inhalt enthält


        if( ! empty( $_GET ) ) {
           if ( empty ( $_GET['perso_id']) ) {
               echo '{ "0":"keine Eingabe" }';
               exit;
           } else {
               $perso_id = $_GET['perso_id'];
               echo getPersonInfo($perso_id, $UpLink);
               
           }
        }

.

        function fetchPersonInfo($person_id) {

                // SQL QUERY
                // Return als JSON Objekt
        }
        ?>


## Step 4

-   Wir wollen AJAX nutzen um die Informationen aus der Datenbank zu holen


.


    function fetchPersonInfo(personId) {
        const objXHR = new XMLHttpRequest();
        objXHR.open('GET', 'includes/db.php?person_id=' + personId, true);
        objXHR.onload = function () {
            if (this.status === 200) {
                // Display the person's information
                document.getElementById('personInfo').innerHTML = this.responseText;
            }
        };
        objXHR.send();
    }
.

