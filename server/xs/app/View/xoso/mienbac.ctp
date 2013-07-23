<?php
    if(isset($jsonData) && count($jsonData) > 0) {
        //echo (json_encode($jsonData));
		$ret = $jsonData[0]['XoSoMB'];
		if(isset($ret) && count($ret) > 0) {
			echo 
				'{'.
					'"id" : "' . $ret['id'].'"'.
					', "date" : "'. $ret['date'].'"'.
					', "result_json" : '. $ret['result_json'].
				'}';
		} else {
			echo 'NO RESULT';
		}
    }else {
        echo 'NO RESULT';
    }
    
?>