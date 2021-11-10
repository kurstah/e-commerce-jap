function initData() {
  let parsedData = JSON.parse(localStorage.getItem("data"));
  if (!parsedData) {
    return {
      Nombre: "",
      Apellido: "",
      Edad: "",
      Email: "",
      Telefono: "",
    };
  } else {
    return parsedData;
  }
}

let data = initData();

document.addEventListener("DOMContentLoaded", function (e) {
  document.getElementById("uName").value = data.Nombre;
  document.getElementById("uSurname").value = data.Apellido;
  document.getElementById("uAge").value = data.Edad;
  document.getElementById("uEmail").value = data.Email;
  document.getElementById("uPhone").value = data.Telefono;
});

function saveChanges() {
  data.Nombre = document.getElementById("uName").value;
  data.Apellido = document.getElementById("uSurname").value;
  data.Edad = document.getElementById("uAge").value;
  data.Email = document.getElementById("uEmail").value;
  data.Telefono = document.getElementById("uPhone").value;
  localStorage.setItem("data", JSON.stringify(data));
  window.location.reload();
}
