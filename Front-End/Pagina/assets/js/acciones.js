function actualizar(){
    document.getElementById("cardsc").innerHTML = '';
    let text="";
    fetch('http://localhost:5000/obtenerlibros')
    .then(response => response.json())
    .then(data =>{
        var i;
        for(i=0;i<data.length;i++){
            text+= `<br>
                    <div class="col-sm-3" style="margin-top: 25px;">
                    <div class="card bg-light" style="width: 18rem;">
                    <img class="card-img-top" src="${data[i].imagen}" alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">${data[i].titulo}</h4>
                        <h5 class="card-title">${data[i].autor}</h5>
                        <p class="card-text">${data[i].descripcion}</p>
                        <button href="#" class="btn btn btn-danger" onclick="eliminar('${data[i].titulo}')">Eliminar</button>
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
  fetch('http://localhost:5000/obtenerlibros')
  .then(response => response.json())
  .then(data =>{
      var i;
      for(i=0;i<data.length;i++){
          text+= `<br>
                  <div class="col-sm-3" style="margin-top: 25px;">
                  <div class="card bg-light" style="width: 18rem;">
                  <img class="card-img-top" src="${data[i].imagen}" alt="Card image cap">
                  <div class="card-body">
                      <h4 class="card-title">${data[i].titulo}</h4>
                      <h5 class="card-title">${data[i].autor}</h5>
                      <p class="card-text">${data[i].descripcion}</p>
                      <button href="#" class="btn btn btn-danger" onclick="eliminar('${data[i].titulo}')">Eliminar</button>
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

fetch('http://localhost:5000/obtenerusuarios')
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