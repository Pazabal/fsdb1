function handleCrearElementos (param) {
    const selector = document.querySelector('#quanty_names');
    crearInputs(selector.value)
  }
  
  function crearInputs (cantidad) {
    //const contenedor = document.querySelector('#names_container');
    const contenedor = document.getElementById('names_container');
    contenedor.innerHTML = null;
  
    for (let i=0; i < cantidad; i++) {
      const nuevoInput = document.createElement('input');
      nuevoInput.className = 'nombre';
      contenedor.appendChild(nuevoInput);
    }
  
    const botonCrear = crearBotonGuardar();
    // Agregar el elemento boton que creamos en la funcion crearBotonGuardar a el contenedor  
    contenedor.appendChild(botonCrear);
  
  }
  
  function crearBotonGuardar () {
    const botonGuardar = document.createElement('button');
    botonGuardar.id = 'crear_nombres';
    botonGuardar.innerHTML = 'Guardar Nombres';
    botonGuardar.addEventListener('click', handleGuardarNombres);
    return botonGuardar;
  }
  
  function handleGuardarNombres () {
    const nombres = document.getElementsByClassName('nombre');
    const contenedor = document.getElementById('display_nombres');
    for (let i=0; i < nombres.length; i ++ ){
      contenedor.append(nombres[i].value);
      contenedor.append("\n");
    }
  }
  
  function eventCrearElementos () {
    const boton = document.querySelector('button');
    boton.addEventListener('click', handleCrearElementos)
  }
  
  function cargar () {
    console.log("Todos las funciones han sido cargadas porque ya cargo la pagina");
    eventCrearElementos();
  }
  
  //
  
  window.onload = cargar;