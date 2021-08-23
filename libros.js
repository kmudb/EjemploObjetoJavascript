//mi contenedor de todos los datos
var biblioteca = new Array();

function guardar_libro(){
    //creacion objeto
    var libro = new Object();
    //propiedades
    libro.isbn = document.getElementById('txtisbn').value;
    libro.titulo=document.getElementById('txttitulo').value;
    libro.autor=document.getElementById('txtautor').value;
    libro.genero=document.getElementById('txtgenero').value;
    biblioteca.push(libro);   
    mostrardatos();
    
}

function mostrardatos(){
    fila ="";
    for (var dato in biblioteca) {
        fila+="<tr>"
        fila+="<td>"+biblioteca[dato].isbn+"</td>";
        fila+="<td>"+biblioteca[dato].titulo+"</td>";
        fila+="<td>"+biblioteca[dato].autor+"</td>";
        fila+="<td>"+biblioteca[dato].genero+"</td>";
        fila+="</tr>"
    }
    document.getElementById('datos').innerHTML=fila;
    console.log(biblioteca);
}

