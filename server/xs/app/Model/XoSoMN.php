<?php

/**
 * GatewayModel.php
 *
 * Model to manipulate table broadcast_voice_gateway
 *
 * $Id: GatewayModel.php 2013/01/19 khanhle$
 * 
 */
class XoSoMN extends AppModel {

    /**
     * Alias for gateway model
     *
     * @var string
     */
    public $name = 'XoSoMN';

    /**
     * Primary key for this model
     * @var string
     */
    public $primaryKey = 'id';

    /**
     * Database table name for gateway model
     *
     * @var string
     */
    public $useTable = 'xo_so_truyen_thong_mn';

    /**
     * Table name for gateway model
     * @var string 
     */
    public $table = 'xo_so_truyen_thong_mn';

    /**
     * Default order to be displayed on web inteface
     * @var array 
     */
    public $order = array(
        'XoSoMN.id ASC',
        'XoSoMN.date DESC'
    );

    /**
     * Retrieve list of gateway with default <link>$order</link>
     * @return array List of gateway
     */
    public function getXoSoList() {
        return $this->find('all');
    }

    public function getResultByDate($date) {
        return $this->find('all', array(
                    'conditions' => array(
                        sprintf(
                                '%s.%s =', $this->name, 'date'
                        ) => $date),
                    'limit' => 1));
    }

    /**
     * Total number of records
     * @return int Total number of records in this model
     */
    public function countRecords() {
        $total = $this->find('count');

        return $total;
    }

}

?>
