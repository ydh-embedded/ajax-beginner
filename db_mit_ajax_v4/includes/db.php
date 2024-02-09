<?php
#region Server-Verbindung
$servername = "localhost";                                                      // Wir stellen die Datenbank verbindung her
$username   = "ajax-user";
$password   = "+Schenker1";
$dbname     = "ajax_db_v4";

$UpLink = new mysqli($servername, $username, $password, $dbname);               // Wir bauen eine Verbindung auf


if ($UpLink->connect_error) {                                                   // Wir testen den UpLink
    die("Verbindung fehlgeschlagen: " . $UpLink->connect_error);
}
#endregion


    if( ! empty( $_GET ) ) {
        if ( empty ( $_GET['Song_ID']) ) {
            echo '{ "0":"keine Eingabe" }';
            exit;
        } else {
            $song_id = $_GET['Song_ID'];
            echo getPersonInfo($song_id, $UpLink);
            
        }
    }


function getPersonInfo($song_id, $UpLink) {

    $sql = "SELECT * FROM songs WHERE Song_ID = $song_id";
    $result = $UpLink->query($sql);

    if ($result->num_rows > 0) {

        $row = $result->fetch_assoc();
        return "<table>
        
                    <tr>
                        <th>Song-ID</th>
                        <th>Label-ID</th>
                        <th>Title</th>
                        <th>Band</th>
                        <th>erstellt</th>
                    </tr>
                    <tr>
                        <td>" . $row["id"] . "</td>
                        <td>" . $row["labels_id_ref"] . "</td>
                        <td>" . $row["title"] . "</td>
                        <td>" . $row["band"] . "</td>
                        <td>" . $row["created_at"] . "</td>
                    </tr>
                </table>";
    } else {
        return "Kein Personal gefunden";
    }
}


// echo getPersonInfo($song_id);
/* echo getPersonInfo(1); */

$db = null;


$UpLink->close();