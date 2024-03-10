const socket=io();

var enviarDatos=document.getElementById("enviarDatos");
enviarDatos.addEventListener("submit",(e)=>{
    e.preventDefault();

    var pregunta=document.getElementById("pregunta").value;
    var datos=document.getElementById("datos");
    

    switch (pregunta) {
        case "1":
            socket.emit("pregunta1", pregunta);
            socket.on("respuesta1", (respuesta1) => {
                datos.innerHTML = respuesta1;
            });
            break;
        case "2":
            socket.emit("pregunta2", pregunta);
            socket.on("respuesta2", (respuesta2) => {
                datos.innerHTML = respuesta2;
            });
            break;
        case "3":
            socket.emit("pregunta3", pregunta);
            socket.on("respuesta3", (respuesta3) => {
                datos.innerHTML = respuesta3;
            });
            break;
        case "4":
            socket.emit("pregunta4", pregunta);
            socket.on("respuesta4", (respuesta4) => {
                datos.innerHTML = respuesta4;
            });
            break;
        case "5":
            socket.emit("pregunta5", pregunta);
            socket.on("respuesta5", (respuesta5) => {
                datos.innerHTML = respuesta5;
            });
            break;
        default:
            break;
    }
    
});