from Usuarios import Usuario
from Libros import Libro
import json
import re

class Gestor:
    def __init__(self):
        self.usuarios =[]
        self.libros = []
        self.libros.append(Libro("La Divina Comedia","Dante Alighieri","https://m.media-amazon.com/images/I/51FBFYOaEZL.jpg","Relata el viaje de Dante por el Infierno, el Purgatorio y el Paraíso"))
        self.usuarios.append(Usuario('admin','admin','admin','admin'))
        self.usuarios.append(Usuario('Jemima','Hernandez','1234','jemher'))
        self.usuarios.append(Usuario('Luisa','Ortiz','1234','luitiz'))

    #Create
    def crearLibro(self,titulo,autor,imagen,descripcion):
        self.libros.append(Libro(titulo,autor,imagen,descripcion))
      
    #Read
    def obtener_libros(self):
        return json.dumps([ob.__dict__ for ob in self.libros])
    
    def obtener_usuarios(self):
        return json.dumps([ob.__dict__ for ob in self.usuarios])

    #Update
    def actualizar_libro(self,nombre,nombrenuevo,autor,imagen,descripcion):
        for x in self.libros:
            if x.titulo==nombre:
                self.libros[self.libros.index(x)]=Libro(nombrenuevo,autor,imagen,descripcion)
                return True
        return False

    #Delete
    def eliminar_libro(self,nombre,autor):
        for x in self.libros:
            if x.titulo==nombre and x.autor == autor:
                self.libros.remove(x)
                return True
        return False

    #Iniciar Sesion
    def iniciar_sesion(self,user,password):
        for x in self.usuarios:
            if x.password==password and x.user ==user:
                return json.dumps(x.__dict__)
        return '{"nombre":"false"}'

    def registrar_usuario(self,nombre,apellido,password,user):
        self.usuarios.append(Usuario(nombre,apellido,password,user))

    def cargamasiva(self,data):
        hola = re.split('\n',data)
        print(hola[0])
        i=1
        while i < len(hola):
            texto = re.split(',',hola[i])
            self.crearLibro(texto[0],texto[1],texto[2],texto[3])
            i = i+1 





        