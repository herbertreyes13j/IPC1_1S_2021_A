//Declaracion de Headers

let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');

//Funcion para registrar usuarios

function CrearUsuario(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var usuario = document.getElementById("usuario");
    var pass = document.getElementById("pass")

    if(nombre.value==''){
        alert('Debe llenar todos los campos')
        return
    }
    //Aca realizamos la peticion
    fetch('http://localhost:5000/registro',
    {
        method:'POST',
        headers,
        // El cuerpo, es decir los valores que vamos a mandar
        body: `{
                "nombre":"${nombre.value}",
                "apellido":"${apellido.value}",
                "password":"${pass.value}",
                "user":"${usuario.value}"
                }`
    })
    .then(response => response.json())
    .then(
        result => {
            console.log('Success:', result);
            nombre.value=''
            apellido.value=''
            usuario.value=''
            pass.value=''
            alert('Usuario Creado')
          }
    )
    .catch(
        error => {
            console.error('Error:', error);
            nombre.value=''
            apellido.value=''
            usuario.value=''
            pass.value=''
            alert('Hubo un error creando usuario')
          }
    )

}

// Funcion para Iniciar Sesion
function IniciarSesion(){
    let usuario = document.getElementById("luser");
    let pass = document.getElementById("lpass");


    fetch(`http://localhost:5000/login/${usuario.value}/${pass.value}`)
    // Convirtiendo de string a texto
    .then(response => response.json())
    // Manejando la data
    .then(data => {
        console.log(data.nombre)
        if(data.nombre=="false"){
            alert('Verifique sus Credenciales')
            pass.value='';
            usuario.value='';
        }else{
            alert(`Bienvenido ${data.nombre}`)
            window.location.href='../Pagina/Inicio.html'
        }
    })

}