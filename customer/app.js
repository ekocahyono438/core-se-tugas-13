console.log("javascript berhasil disimpan");

const toggleButton = document.querySelector("#toggleTips");
const formTips = document.querySelector("#formTips");
const customerForm = document.querySelector("#customerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

const nameFeedback = document.querySelector("#nameFeedback");
const emailFeedback = document.querySelector("#emailFeedback");

const no_hp = document.querySelector("#no_hp");
const no_hpFeedback = document.querySelector("#no_hpFeedback");

const ttl = document.querySelector("#ttl");
const ttlFeedback= document.querySelector("#ttlFeedback");

const nik = document.querySelector("#nik");
const nikFeedback = document.querySelector("#nikFeedback");

const kota = document.querySelector("#kota");
const kotaFeedback = document.querySelector("#kotaFeedback");

const kabupaten = document.querySelector("#kabupaten");
const kabupatenFeedback = document.querySelector("#kabupatenFeedback");

const alamat = document.querySelector("#alamat");
const alamatFeedback = document.querySelector("#alamatFeedback");

const formMessege = document.querySelector("formMessege");

toggleButton.addEventListener("click", function(){
    formTips.hidden = !formTips.hidden;
    toggleButton.textContent = formTips.hidden ? "Tampil Petujuk " : "Sembunyikan Petunjuk"; 
});

nameInput.addEventListener("input", function(){
    if(nameInput.value.trim()===""){
        nameFeedback.textContent = "nama belum diisi";
    }else{
        nameFeedback.textContent = "Format Nama Sudah Valid";
    }

});

ttl.addEventListener("input", function(){
    if(ttl.value.trim()===""){
        ttl.textContent = "Tempat Tanggal Lahir Belum diisi";

    }else{
       ttlFeedback.textContent = "Format Tempat Tanggal Lahir Valid";
    }
});

nik.addEventListener("input", function(){
    if(nik.value.trim()===""){
        nik.textContent = "Nik Belum diisi";

    }else{
       nikFeedback.textContent = "Format Nik Valid";
    }
});

emailInput.addEventListener("input", function(){
    if(emailInput.value.trim()===""){
        emailFeedback.textContent = "Email Belum diisi";

    }else if (!emailInput.validity.valid){
        emailFeedback.textContent = "Periksa Form email";

    }else{
        emailFeedback.textContent = "Format email Valid";
    }

    
});

no_hp.addEventListener("input", function(){
    if(no_hp.value.trim()===""){
        no_hpFeedback.textContent = "No Hp Belum diisi";

    }else{
       no_hpFeedback.textContent = "Format nomor Hp Valid";
    }
});

kota.addEventListener("input", function(){
    if(kota.value.trim()===""){
        kotaFeedback.textContent = "Kota Belum diisi";

    }else{
       kotaFeedback.textContent = "Format Kota Valid";
    }
});

kabupaten.addEventListener("input", function(){
    if(kabupaten.value.trim()===""){
        kabupatenFeedback.textContent = "Kota Belum diisi";

    }else{
       kabupatenFeedback.textContent = "Format Kota Valid";
    }
});

alamat.addEventListener("input", function(){
    if(alamat.value.trim()===""){
        alamatFeedback.textContent = "Alamat Belum diisi";

    }else{
       alamatFeedback.textContent = "Format Alamat Valid";
    }
});


//waktu Disubmit
customerForm.addEventListener("submit", function (event) {
    let hasError = false;
    nameFeedback.textContent = "";
    ttlFeedback.textContent = "";
    nikFeedback.textContent ="";
    emailFeedback.textContent ="";
    no_hpFeedback.textContent ="";
    kotaFeedback.textContent ="";
    kabupatenFeedback.textContent ="";
    alamatFeedback.textContent ="";
    formMessege.textContent ="";

    if (nameInput.value.trim() == ""){
        nameFeedback.textContent = "Nama Wajib Disi";
        hasError = true;
    }

    if (ttl.value.trim()== ""){
        ttlFeedback.textContent = "Tempat Tanggal Lahir Wajib Diisi";
        hasError = true;
    }

     if (nik.value.trim()== ""){
        nikFeedback.textContent = "Nik Wajib Diisi";
        hasError = true;
    }


    if(emailInput.value.trim() == "" || !emailInput.validity.valid){
        event.preventDefault();
        emailFeedback.textContent ="Email Wajib Diisi dan Pastikan formatnya Benar";
        hasError = true;
    }
    if(no_hp.value.trim() == "" ){
        no_hp.textContent ="No Telpon Wajib Diisi dan Pastikan formatnya Benar";
        hasError = true;
    }

     if(kota.value.trim() == "" ){
        kota.textContent ="Kota Wajib Diisi dan Pastikan formatnya Benar";
        hasError = true;
    }

     if(kabupaten.value.trim() == "" ){
        kabupaten.textContent ="Kota Wajib Diisi dan Pastikan formatnya Benar";
        hasError = true;
    }

    if(alamat.value.trim() == "" ){
        alamat.textContent ="Alamat Wajib Diisi dan Pastikan formatnya Benar";
        hasError = true;
    }


    if(hasError){
        formMessege.textContent = "perbaiki format yang masih salah";
    }else{
        formMessege.textContent = "Data Sudah Bisa diproses";
    }
    
});
