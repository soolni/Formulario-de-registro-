function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//Código de la actividad

const registerBtn = document.getElementById("regBtn");

registerBtn.addEventListener("click", function(event){
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("terminos").value;
    const inputs = document.querySelectorAll(".form-control");
    const terminos = document.getElementById("terminos").checked;

    if (!inputs.checkValidity || !terminos || (password1 != password2)) {
        event.preventDefault();
        showAlertError();
    } else {
        showAlertSuccess();
    }
});