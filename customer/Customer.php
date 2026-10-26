<?php
class Customer{
    private string $name;
    private string $email;
    private string $no_hp;
    private string $ttl;
    private string $nik;
    private string $kota;
    private string $kabupaten;
    private string $alamat;

    
    public function __construct(
        string $name, 
        string $email, 
        string $no_hp, 
        string $ttl, 
        string $nik,
        string $kota,
        string $kabupaten,
        string $alamat
    ){
        $this->name = trim ($name);
        $this->email = trim ($email);
        $this->no_hp = trim ($no_hp);
        $this->ttl = trim ($ttl);
        $this->nik = trim ($nik);
        $this->kota =trim ($kota);
        $this->kabupaten = trim ($kabupaten);
        $this->alamat = trim ($alamat);
    
}

        public function getName(){
            return $this->name;
        }
        public function getTtl(){
            return $this->ttl;
        }

        public function getNik(){
            return $this->nik;
        }

        public function getEmail(){
            return $this->email;
        }

        public function getNoHp(){
            return $this->no_hp;
        }
        public function getKota(){
            return $this->kota;
        }
        public function getKabupaten(){
            return $this->kabupaten;
        }
         public function getAlamat(){
            return $this->alamat;
        }

}

?>