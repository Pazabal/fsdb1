// llamar el modal
let modal = document.getElementById("login_modal");

// llamar el boton que abre el modal
let botonIngresar = document.getElementById("botonIngresar");

// llamar el elemento <span> que cierra el modal
let span = document.getElementsByClassName("close")[0];

// cuando el usuario haga click en el boton, abrir el modal 
botonIngresar.onclick = function() {
  modal.style.display = "block";
}

// cuando el usuario haga click en <span> (x), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// cuando el usuario haga click fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 