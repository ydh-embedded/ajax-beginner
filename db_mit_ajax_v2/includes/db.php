<?php
#region Server-Verbindung
$servername = "localhost";                                                      // Wir stellen die Datenbank verbindung her
$username   = "ajax-user";
$password   = "+Schenker1";
$dbname     = "ajax_db";

$UpLink = new mysqli($servername, $username, $password, $dbname);               // Wir bauen eine Verbindung auf


if ($UpLink->connect_error) {                                                   // Wir testen den UpLink
    die("Verbindung fehlgeschlagen: " . $UpLink->connect_error);
}
#endregion


    if( ! empty( $_GET ) ) {
        if ( empty ( $_GET['perso_id']) ) {
            echo '{ "0":"keine Eingabe" }';
            exit;
        } else {
            $perso_id = $_GET['perso_id'];
            echo getPersonInfo($perso_id, $UpLink);
            
        }
    }


function getPersonInfo($perso_id, $UpLink) {

    $sql = "SELECT * FROM tbl_persons WHERE perso_id = $perso_id";
    $result = $UpLink->query($sql);

    

    if ($result->num_rows > 0) {

        $row = $result->fetch_assoc();
        return "<table>
        
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                        <th>Hometown</th>
                        <th>Job</th>
                    </tr>
                    <tr>
                        <td>" . $row["perso_firstname"] . "</td>
                        <td>" . $row["perso_lastname"] . "</td>
                        <td>" . $row["perso_age"] . "</td>
                        <td>" . $row["perso_hometown"] . "</td>
                        <td>" . $row["perso_job"] . "</td>
                    </tr>
                </table>";
    } else {
        return "Kein Personal gefunden";
    }
}


// echo getPersonInfo($perso_id);
/* echo getPersonInfo(1); */

$db = null;


$UpLink->close();