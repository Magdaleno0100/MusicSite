
function crearColleccion(favoritos){
    var divContenedor = document.querySelector("#visualizador-colleccion");
    var elementos = favoritos;
    for(var i=0;i<elementos;i++){
        var tag_div = document.createElement("div");
        var text = document.createTextNode("Nombre canción "+(i+1));
        tag_div.appendChild(text);
        divContenedor.appendChild(tag_div);
    }
}

crearColleccion(50);


/*
.lag-3D54FAFE
*/