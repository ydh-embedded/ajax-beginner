<?php
    if( ! empty( $_GET ) ) {
        if ( empty ( $_GET['val']) ) {
            echo '{ "0":"keine Eingabe" }';
            exit;
        } else {
            $val = $_GET['val'];
        }

        $phoneNbrsFile = 'phonebook.txt';
        $fp = fopen( $phoneNbrsFile, 'r');

        if( !$fp ){
            echo '{"0":"Die Datei  $phoneNbrsFile wurde nicht gefunden"}' ;           // json ist immer eine Zeichenkette die von js in ein String umgewandelt werden
            exit;
        }

        $phoneNbrsArr = array();

        while ( ($phoneNbr = fgets( $fp )) !== false ){
            if( preg_match( "/^$val/i" , $phoneNbr )){
                $phoneNbrsArr[] = $phoneNbr;
            }

        }
        echo json_encode( $phoneNbrsArr);

        fclose($fp);

    }