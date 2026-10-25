<?php
class Customer{
    private string $name;
    private string $email;
    private string $no_hp;
    
    public function __construct(string $name, string $email, string $no_hp){
        $this->name = trim ($name);
        $this->email = trim ($email);
        $this->no_hp = trim ($no_hp);
    
}

    public function getName(){
        return $this->name;
    }
    public function getEmail(){
        return $this->email;
    }

    public function getNoHp(){
        return $this->no_hp;
    }
}

?>