var data = {
    "Nombre": "",
    "Apellido": "",
    "Edad": "",
    "Email": "",
    "Telefono": ""
}

var dparse = JSON.parse(localStorage.getItem("data")); 



if (dparse) {
    document.getElementById("uName").value = dparse.Nombre;
    document.getElementById("uSurname").value = dparse.Apellido;
    document.getElementById("uAge").value = dparse.Edad;
    document.getElementById("uEmail").value = dparse.Email;
    document.getElementById("uPhone").value = dparse.Telefono;
}

function saveChanges() {
    data.Nombre = document.getElementById("uName").value;
    data.Apellido = document.getElementById("uSurname").value;
    data.Edad = document.getElementById("uAge").value;
    data.Email = document.getElementById("uEmail").value;
    data.Telefono = document.getElementById("uPhone").value;
    localStorage.setItem("data", JSON.stringify(data));
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    function mostrarData(){
        let data = JSON.parse(localStorage.getItem("data"))
       
        let nameHTML = document.getElementById("mName");
        let surnameHTML = document.getElementById("mSurname");
        let ageHTML = document.getElementById("mAge");
        let emailHTML = document.getElementById("mEmail");
        let phoneHTML = document.getElementById("mPhone");

        nameHTML.textContent = localStorage.getItem(data.Nombre);
        surnameHTML.innerHTML = localStorage.getItem(data.Apellido);
        ageHTML.innerHTML = localStorage.getItem(data.Edad);
        emailHTML.innerHTML = localStorage.getItem(data.Email);
        phoneHTML.textContent = localStorage.getItem(data.Telefono);
    }
    mostrarData();
});