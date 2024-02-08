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
/*$sCSV = 'includes/plz.csv'; */
  $sCSV = 'plz.csv';
  $fp   = fopen( $sCSV , 'r');
  if( !$fp ){
    echo '{"0":"Die Datei wurde nicht gefunden"}';
    exit;
  }


  $arrayOutput = array();
  $i = 0 ;
  while ( $arrROW = fgetcsv( $fp )){
    if ( $i === 0){ $i++ ; continue;  }

    if( preg_match( "/^$q/i", $arrROW[1]) || preg_match( "/^$q/i" , $arrROW[2]) ){
      $arrayOutput[] = array (
        'ort'         => $arrROW [1],
        'plz'         => $arrROW [2],
        'bundesland'  => $arrROW [3],
      );
    }
  }
  echo json_encode( $arrayOutput);
  fclose($fp);
}