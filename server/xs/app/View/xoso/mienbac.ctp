<?php
    if(isset($jsonData) && count($jsonData) > 0) {
        echo (json_encode($jsonData));
    }else {
        echo 'NO RESULT';
    }
    
?>