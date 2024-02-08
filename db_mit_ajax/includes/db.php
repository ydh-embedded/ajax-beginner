<?php

$servername = "localhost";                                                      // Wir stellen die Datenbank verbindung her
$username   = "ajax-user";
$password   = "+Schenker1";
$dbname     = "ajax_db";

$UpLink = new mysqli($servername, $username, $password, $dbname);               // Wir bauen eine Verbindung auf


if ($UpLink->connect_error) {                                                   // Wir testen den UpLink
    die("Verbindung fehlgeschlagen: " . $UpLink->connect_error);
}

// Function to retrieve person information from the database
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
        return "No person found.";
    }
}

// Example usage:
$person_id = $_GET['person_id']; // Get the person ID from the AJAX request
echo getPersonInfo($person_id); // Output the person information

$UpLink->close();
?>