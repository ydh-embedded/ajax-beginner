
## JSON String

-   wir schützen die DOM Struktur
-   XHR-Object erzeugen
-   Variablen / Konstanten für Eingabefeld und Ausgabefeld erzeugen
-   Eventhändler bei betätigen der Taste für das Eingabefeld anlegen und CallBack Function registrieren
-   eingabe aus dem Textfeld
-   json-Object erzeugen
-   Ausgabe Variable anlegen
-   SChleife über das json Object anlegen
-   HTML Zeilen Taggs anlegen
-   jede Eigenschaft mit dem HTML-Zellen-Taggs umscließen
-   Zeilenstruktur an die Ausgabe Variable anhängen
-   Ausgabe Variable in den Ausgabe Bereich ausgeben



## PHP

-   Wir prüfen auf Inhalt
-   mit <code>$_GET</code> leer? JA Ausgabe Fehler : PRG continue
-   Wir prüfen ob Zeichenkette leer ist? JA Ausgabe Meldung & PRG abbruch : PRG continue
-   Wir prüfen auf öffnen der CSV erfolgreich? JA continue : NEIN Abbruch Bedingung mit Meldung
-   Wir lesen die Datei zeilenweise aus <code>foreach</code>
-   Wir bestimmen die Auslese Bedingungen <code>regularExpresssions</code>
-   <code>fgetCSV</code> liefert eine function um ein Array zu erzeugen
-   wir erzeugen ein zweidimensionales array aus dem ursprungsarray

<code>
  array ( [0] => Array ( ['ort'] = "Aachen" ,['plz'] = "52066"  ,['bundesland'] = "nrw")
          [1] => Array ( ['ort'] = "Aachen" ,['plz'] = "52066"  ,['bundesland'] = "nrw") 
  )
</code>
-   Wir konvertieren dieses in ein json - string an ein XHJR-Object

-   wir schliesen dies csv-Datei


### Übersicht von var - const - functions

-   Bezeichner
        -   <code>$_GET</code> superglobale Zeichenkette im key <code>q</code>
        -   <code>strCSV</code> Pfad zur CSV
        -   <code>fp</code> Datei-Erzeuger
        -   <code>arrRow</code> Schleifenvariable für Zeilen-Array
        -   <code>arrOutput</code> Array mit gefilterten Daten aus der CSV-Datei
