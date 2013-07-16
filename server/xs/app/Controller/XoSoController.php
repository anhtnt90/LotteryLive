<?php
/**
* AdminController.php
*
* Manage system
*
* $Id: AdminController.php 2013/01/01 ThucNd$
* 
*/

App::uses('AppController', 'Controller');
App::uses('Sanitize', 'Utility');
/**
 * Login Controller
 *
 */
class XoSoController extends AppController {

//    public $layout = 'json';
    public $name = 'xoso';
    /**
     * An array containing the class names of models this controller uses.
     * @var array 
     */
    public $uses = array('XoSoMB');
    
     /**
     * Component
     * @var array 
     */
    public $components = array('AppLogic');
//    public $javascripts = null;
//    public $csss        = array('login');

    function beforeFilter() {
        $this->request->data = Sanitize::clean($this->request->data, array('encode' => false));
        return parent::beforeFilter();
    }
    
    public function mienbac() {
        $this->layout = null;
        $params = $this->getRequestParams();
//        var_dump($this->getRequestParams());
        $jsonData = array();
        if(isset($params['date'])) {
            $jsonData = $this->AppLogic->getXosoMBByDate($params['date'], $this->XoSoMB);
        } 
        
        $this->set(compact('jsonData'));
    }

}
