<?php
#region wir prüfen
if(  empty( $_GET ) ) {
    header('Location: ../index.html');
    } else {
        if( empty ( $_GET['q'])){
          echo null;
          exit;
        } else {
          $q = $_GET['q'];
        }
    }

$sSQL = '../db/tbl_persons.sql';
$db = new PDO('mysql:host=localhost;dbname=testdb;charset=utf8', 'username', 'password');

// Execute the SQL commands in the file


$arrayOutput = array();
$i = 0;

if ($stmt) {
 
 while ($arrayROW = $stmt->fetch(PDO::FETCH_ASSOC)) {            // Read the rows returned by the query and populate the array
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

