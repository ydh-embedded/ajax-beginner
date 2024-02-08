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
/*   $sCSV = 'plz.csv'; */
$sSQL = '../db/tbl_persons.sql';
  $file   = fopen( $sSQL , 'r');
  if( !$filepath ){
    echo '{"0":"Die Datei wurde nicht gefunden"}';
    exit;
  }


  $arrayOutput = array();
  $i = 0;
  
  // Open the file using fopen
  $file = fopen($filepath, 'r');
  
  if ($file) {
      // Read the file line by line using a while loop
      while (($arrayROW = fgetcsv($file)) !== false) {
          if ($i === 0) {
              $i++;
              continue;
          }
  
          if (preg_match("/^$q/i", $arrayROW[1]) || preg_match("/^$q/i", $arrayROW[2])) {
              $arrayOutput[] = array(
                  'perso_id'        => $arrayROW[1],
                  'perso_firstname' => $arrayROW[2],
                  'perso_lastname'  => $arrayROW[3],
                  'perso_age'       => $arrayROW[4],
                  'perso_hometown'  => $arrayROW[5],
                  'perso_job'       => $arrayROW[6]
              );
          }
      }
  
      // Close the file pointer
      fclose($file);
  } else {
      // File could not be opened, handle the error here
      echo "Unable to open the file";
  }
  
  echo json_encode($arrayOutput);
}