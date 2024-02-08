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

function getPersonInfo($person_id) {

    global $UpLink;

    $sql = "SELECT * FROM tbl_persons WHERE perso_id = $person_id";
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
                        <td>" . $row["firstname"] . "</td>
                        <td>" . $row["lastname"] . "</td>
                        <td>" . $row["age"] . "</td>
                        <td>" . $row["hometown"] . "</td>
                        <td>" . $row["job"] . "</td>
                    </tr>
                </table>";
    } else {
        return "Kein Personal gefunden";
    }
}

function outputPersonInfo($stmt){

  $arrayOutput = array();
  $i = 0 ;
  $q = 0 ;

if ($stmt) {
 
 while ($arrayROW = $stmt->fetch(PDO::FETCH_ASSOC)) {            // wir lesen die Reihen aus
   if ($i === 0) {
        $i++;
        continue;
   }
   
   if (preg_match("/^$q/i", $arrayROW[1]) || preg_match("/^$q/i", $arrayROW[2])) {
       $arrayOutput[] = array(
            'perso_id'          => $arrayROW[1],
            'perso_firstname'   => $arrayROW[2],
            'perso_lastname'    => $arrayROW[3],
            'perso_age'         => $arrayROW[4],
            'perso_hometown'    => $arrayROW[5],
            'perso_job'         => $arrayROW[6]
       );
   }
 }
} else {
    echo "Unable to execute the SQL commands";
}

echo json_encode($arrayOutput);

$db = null;
}


$UpLink->close();