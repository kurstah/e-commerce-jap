//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

    let BotonDeIngresar = document.getElementById('ingresar');
    BotonDeIngresar.addEventListener('click', function(irAlIndex){

        irAlIndex.preventDefault();
        let username = document.getElementById('usuario').value;
        let password = document.getElementById('contraseña').value;
        
        if (username !== '' && password !==''){
        localStorage.setItem('usuario', username);
        localStorage.setItem('contraseña', password);
        window.location.href = 'index.html';
    } else {
        alert('Datos incorrectos, vuelva a intentarlo')
    }
})
});

