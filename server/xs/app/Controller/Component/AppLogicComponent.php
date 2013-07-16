<?php

/**
 * GatewayLogicComponent.php
 *
 * Gateway logic
 *
 * $Id: GatewayLogicComponent.php 2013/01/22 khanhle$
 * 
 */
App::uses('Component', 'Controller');

/**
 * Gateway logic
 *
 */
class AppLogicComponent extends Component {

    const _ONLY_ONE_ = 1;

    /**
     * Initialze component
     * @param Controller $controller
     */
    public function initialize(Controller &$controller) {
        $this->Controller = $controller;
    }

    /**
     * Delete multiple records by ids for that <link>$model</link>
     * @param array $ids List ids to be deleted
     * @param Model $model 
     * 
     * @return boolean True on success, false on failure
     */
    public function deleteMultiple($ids, $model) {
//
//        if (count($ids) === AppLogicComponent::_ONLY_ONE_) {
//            return $model->delete($ids[0]);
//        } else {
//            $conditions = array(
//                sprintf(
//                        '%s.%s in', $model->name, $model->primaryKey
//                ) => $ids);
//            return $model->deleteAll($conditions);
//        }
    }
    
    /**
     * Save data for this model
     * @param array $data
     * @param Model $model
     * @return On success Model::$data if its not empty or true, false on failure
     */
    public function save($data, $model) {
//        $model->set($data);
//        
//        return $model->save();
    }
    
    public function getXosoMBList($model) {
        return $model->getXoSoList();
    }
    
    public function getXosoMBByDate($date, $model) {
        return $model->getResultByDate($date);
    }

}

?>
