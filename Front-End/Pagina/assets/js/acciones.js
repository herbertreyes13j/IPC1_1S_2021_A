//Declaracion de Headers

let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');


function cargar(){
    let file = document.getElementById("carga").files[0];
    if (file) {
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            let cuerpo = {
                data:evt.target.result
            }

            console.log(JSON.stringify(cuerpo))
            fetch('http://34.72.166.140:5000/carga', {
            method: 'POST',
            headers,
            body: JSON.stringify(cuerpo),
            })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                actualizar()
            })
            .catch(error => {
                console.error('Error:', error);
            });

        }
        reader.onerror = function (evt) {
            
        }
    }
}



function modificarlibro(){
    let titulo_o = document.getElementById("vtitulo");
    let titulo = document.getElementById("ntitulo");
    let autor = document.getElementById("nautor");
    let descripcion = document.getElementById("ndescripcion");
    let imagen = document.getElementById("nimagen")
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
  
    let reque = `{
      "titulo":"${titulo.value}",
      "autor":"${autor.value}",
      "descripcion":"${descripcion.value}",
      "imagen":"${imagen.value}"
    }`
  
    fetch('http://34.72.166.140:5000/libros/'+titulo_o.value, {
      method: 'PUT',
      headers,
      body: reque,
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      actualizar()
      titulo_o.value=''
      titulo.value=''
      autor.value=''
      descripcion.value=''
      imagen.value=''
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    
  
  }

function eliminar(libro,autor){
    console.log(libro,autor)
    
    fetch('http://34.72.166.140:5000/libros/'+libro+'/'+autor,{
        method:'DELETE'
    })
    .then(res => res.text())
    .then(res=> {
        alert(res)
        actualizar()
    })
    
}

function agregarlibro(){
  let titulo = document.getElementById("titulo");
  let autor = document.getElementById("autor");
  let descripcion = document.getElementById("descripcion");
  let imagen = document.getElementById("imagen")
  fetch('http://34.72.166.140:5000/libros', {
    method: 'POST',
    headers,
    body: `{
        "titulo":"${titulo.value}",
        "autor":"${autor.value}",
        "descripcion":"${descripcion.value}",
        "imagen":"${imagen.value}"
      }`,
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
    actualizar()
    titulo.value=''
    autor.value=''
    descripcion.value=''
    imagen.value=''
  })
  .catch(error => {
    console.error('Error:', error);
  });

}
function actualizar(){
    document.getElementById("cardsc").innerHTML = '';
    let text="";
    fetch('http://34.72.166.140:5000/obtenerlibros')
    .then(response => response.json())
    .then(data =>{
        var i;
        for(i=0;i<data.length;i++){
            text+= `<br>
                    <div class="col-sm-3 col-md-3 col-lg-3""  style="margin-top: 25px;float: left;">
                    <div class="card bg-light" style="width: auto;">
                    <img class="card-img-top" src="${data[i].imagen}" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">${data[i].titulo}</h4>
                        <h5 class="card-title">${data[i].autor}</h5>
                        <p class="card-text">${data[i].descripcion}</p>
                        <button href="#" class="btn btn btn-danger" onclick="eliminar('${data[i].titulo}','${data[i].autor}')">Eliminar</button>
                    </div>
                    </div>
                    </div>
                    <br>`
            console.log(data[i].nombre,'prueba')
        }
        document.getElementById("cardsc").innerHTML = text;
    });
  
  
  }

  // Carga de Libros

  let text="";
  fetch('http://34.72.166.140:5000/obtenerlibros')
  .then(response => response.json())
  .then(data =>{
      var i;
      for(i=0;i<data.length;i++){
          text+= `<br>
                  <div class="col-sm-3 col-md-3 col-lg-3" style="margin-top: 25px;border-style: dotted;">
                  <div class="card bg-light" style="width: auto;">
                  <img class="card-img-top" src="${data[i].imagen}" alt="Card image cap">
                  <div class="card-body">
                      <h4 class="card-title">${data[i].titulo}</h4>
                      <h5 class="card-title">${data[i].autor}</h5>
                      <p class="card-text">${data[i].descripcion}</p>
                      <button href="#" class="btn btn btn-danger" onclick="eliminar('${data[i].titulo}','${data[i].autor}')">Eliminar</button>
                  </div>
                  </div>
                  </div>
                  <br>`
          console.log(data[i].nombre,'prueba')
      }
      document.getElementById("cardsc").innerHTML = text;
  });

// Carga de Usuarios

let text2=""
text2 = `<table class="table" style="margin=10px">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Nombre</th>
<th scope="col">Apellido</th>
<th scope="col">Contraseña</th>
<th scope="col">Usuario</th>
</tr>
</thead>
<tbody>`

fetch('http://34.72.166.140:5000/obtenerusuarios')
.then(response => response.json())
.then(data =>{
    var i;

    
    for(i=0;i<data.length;i++){
        text2+= `
                <tr>
                <th scope="row">${i+1}</th>
                <td>${data[i].nombre}</td>
                <td>${data[i].apellido}</td>
                <td>${data[i].password}</td>
                <td>${data[i].user}</td>
                </tr>
                `
    }
    text2+=`</tbody>
            </table>`
    document.getElementById("tablausers").innerHTML = text2;
});