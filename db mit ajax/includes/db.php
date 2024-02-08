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
  $filepath   = fopen( $sSQL , 'r');
  if( !$filepath ){
    echo '{"0":"Die Datei wurde nicht gefunden"}';
    exit;
  }


  $arrayOutput = array();
  $i = 0 ;
  while ( $arrayROW = fgetcsv( $filepath )){
    if ( $i === 0){ $i++ ; continue;  }

    if( preg_match( "/^$q/i", $arrayROW[1]) || preg_match( "/^$q/i" , $arrayROW[2]) ){
      $arrayOutput[] = array (
        'ort'         => $arrayROW [1],
        'plz'         => $arrayROW [2],
        'bundesland'  => $arrayROW [3],
      );
    }
  }
  echo json_encode( $arrayOutput);
  fclose($filepath);
}