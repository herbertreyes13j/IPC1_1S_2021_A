//Funcion para registrar usuarios

function CrearUsuario(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var usuario = document.getElementById("usuario");
    var pass = document.getElementById("pass")


    alert(nombre.value)

}

// Funcion para Iniciar Sesion
function IniciarSesion(){
    var usuario = document.getElementById("luser");
    var pass = document.getElementById("lpass");

    if(pass.value=="admin" && usuario.value=="admin"){
        window.location.href='../Pagina/Inicio.html'
    }else{
        alert('Usuario/Contraseña Invalidos')
        pass.value='';
        usuario.value='';
    }
}