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
    private string $provinsi;
    private string $kode_pos;
    private string $nama_ortu;

    
    public function __construct(
        string $name, 
        string $email, 
        string $no_hp, 
        string $ttl, 
        string $nik,
        string $kota,
        string $kabupaten,
        string $alamat,
        string $provinsi,
        string $kode_pos,
        string $nama_ortu,

    ){
        $this->name = trim ($name);
        $this->email = trim ($email);
        $this->no_hp = trim ($no_hp);
        $this->ttl = trim ($ttl);
        $this->nik = trim ($nik);
        $this->kota =trim ($kota);
        $this->kabupaten = trim ($kabupaten);
        $this->alamat = trim ($alamat);
        $this->provinsi =trim ($provinsi);
        $this->kode_pos =trim ($kode_pos);
        $this->nama_ortu =trim ($nama_ortu);
    
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
        public function getProvinsi(){
            return $this->provinsi;
        }

         public function getKodePos(){
            return $this->kode_pos; 
        }
        public function getNamaOrangTua(){
            return $this->nama_ortu;
        }

}

?>