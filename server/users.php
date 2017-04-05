<?php
    $users = array(
        array("id" => "1", "name" => "John", "email" => "john@test.com"),
        array("id" => "2", "name" => "Max", "email" => "max@test.com"),
        array("id" => "3", "name" => "Glenn", "email" => "glenn@test.com"),
        array("id" => "4", "name" => "Clarke", "email" => "clarke@test.com")
    );
    
    sleep(2);
    
    echo json_encode($users);exit;
?>