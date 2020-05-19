let pantallas = ["login","menu", "add", "lista"];
// Función que muestra una pantalla y oculta las demás
let mostrar = function (id) {
  //Abstracción
  // Buscar y mostrar el elemento deseado
  let aMostrar = document.querySelector("#" + id);
  aMostrar.style.display = "block";
  // Ocultar los demás elementos
  for (pantalla of pantallas) {
    if (pantalla !== id)
      document.querySelector("#" + pantalla).style.display = "none";
  }
  //   return
};

mostrar("login");

let botonesAdd = document.getElementsByClassName("irAAdd");
for (boton of botonesAdd) {
  // onclick necesita la referencia a una función, no
  // el resultado de evaluar una función
  // ARROW FUNCTIONS ()=>{aksj}, funciones anónimas
  boton.onclick = () => mostrar("add");
  // boton.onmouseover = () => mostrar("lista");
}
let botonLista = document.getElementsByClassName("irALista")
for (boton of botonLista){
  boton.onclick = () => mostrar ("lista")
}
let botonMenu =document.getElementsByClassName("irAMenu")
for (boton of botonMenu){
  boton.onclick = () => mostrar ("menu")
}
  let usuarios =[
    {nombre:"Diego", clave:"clave1234"},
    {nombre:"Andres", clave:"abc.1234"},
    {nombre:"Luisa", clave:"qwerty.1234"},
    {nombre:"Maria", clave:"miClave"},
];
let USUARIO;
let iniciarSesion = function (){
  console.log("intento de inicio de sesion");
  let nombreIntento = document.getElementById("nombre").value
  let claveIntento = document.getElementById("password").value
  console.log(nombreIntento);
  console.log(claveIntento);
  for(usuario of usuarios){
    if(usuario.nombre== nombreIntento && usuario.clave == claveIntento)
  {
    USUARIO =usuario.nombre;
    mostrar("menu")
    formaInicioSesion.reset();
    return false;
  } 
}
alert("Nombre de usuario o contraseña incorrectos")
 return false;
};
let formaInicioSesion = document.getElementById("formaInicioSesion");
formaInicioSesion.onsubmit = iniciarSesion;
let tareas =[
  {
    materia:"fisica", detalle:"Hacer el laboratorio de movimiento parabólico", fecha:new Date(2020, 4, 21)
  },
  {
    materia:"informatica", detalle:"Hacer el laboratorio de javascript", fecha:new Date(2020, 4, 24)
  },
  {
    materia:"matematicas", detalle:"Hacer el taller de ecuaciones", fecha:new Date(2020, 4, 26)
  },
  {
    materia:"ciencias", detalle:"Hacer la presentacion de la fotosintesis", fecha:new Date(2020, 4, 30)
  },
];

let crearTabla = function(lista){
  let stringTabla = " <tr><th>Materia</th><th>Detalle</th><th>Fecha</th></tr>"
  for(let tarea of lista){
    let fila= "<tr> <td>"
    fila += tarea.materia;
    fila += "</td>"

    fila += "<td>"
    fila += tarea.detalle;
    fila += "</td>"

    fila += "<td>"
    fila += tarea.fecha;
    fila += "</td>"

    fila += "</tr>";
    stringTabla += fila;
    console.log(stringTabla);
  }
  return stringTabla;
}
document.getElementById("tablaTareas").innerHTML =crearTabla(tareas);
crearTabla(tareas);


