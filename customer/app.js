console.log("javascript berhasil disimpan");

const toggleButton = document.querySelector("#toggleTips");
const formTips = document.querySelector("#formTips");
const customerForm = document.querySelector("#customerForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const nameFeedback = document.querySelector("#nameFeedback");
const emailFeedback = document.querySelector("#emailFeedback");
const formMessege = document.querySelector("formMessege");
const no_hp = document.querySelector("#no_hp");
const no_hpFeedback= document.querySelector("#no_hpFeedback");

toggleButton.addEventListener("click", function(){
    formTips.hidden = !formTips.hidden;
    toggleButton.textContent = formTips.hidden ? "Tampil Petujuk " : "Sembunyikan Petunjuk"; 
});

nameInput.addEventListener("input", function(){
    if(nameInput.value.trim()===""){
        nameFeedback.textContent = "nama belum diisi";
    }else{
        nameFeedback.textContent = "nama sudah diisi";
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
        no_hpFeedback.textContent = "no hp Belum diisi";

    }else{
       no_hpFeedback.textContent = "Format nomor hp Valid";
    }
});

customerForm.addEventListener("submit", function (event) {
    let hasError = false;
    nameFeedback.textContent = "";
    emailFeedback.textContent ="";
    formMessege.textContent ="";
    if (nameInput.value.trim() == ""){
        nameFeedback.textContent = "Nama Wajib Disi";
        hasError = true;
    }
    if(emailInput.value.trim() == "" || !emailInput.validity.valid){
        event.preventDefault();
        emailFeedback.textContent ="Email Wajib Diisi dan Pastikan formatnya benar";
        hasError = true;
    }
    if(no_hp.value.trim() == "" || !no_hp.validity.valid){
        event.preventDefault();
        no_hp.textContent ="Email Wajib Diisi dan Pastikan formatnya benar";
        hasError = true;
    }

    if(hasError){
        formMessege.textContent = "perbaiki format yang masih salah";
    }else{
        formMessege.textContent = "Data Sudah Bisa diproses";
    }
    
});
