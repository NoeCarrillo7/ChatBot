function socket(io){
    io.on("connection",(socket)=>{

        socket.on("pregunta1",()=>{
            var respuesta1="Universidad Tecnologica de San Juan del Rio";
            io.emit("respuesta1",respuesta1);
        });

        socket.on("pregunta2",()=>{
            var respuesta2="Tecnologias de la informacion, Mecatronica, Negocios, Quimica";
            io.emit("respuesta2",respuesta2);
        });

        socket.on("pregunta3",()=>{
            var respuesta3="Av. La Palma No. 125, Col. Vista Hermosa | San Juan del Río, Qro.";
            io.emit("respuesta3",respuesta3);
        });

        socket.on("pregunta4",()=>{
            var respuesta4="3 de Enero al 8 de marzo";
            io.emit("respuesta4",respuesta4);
        });

        socket.on("pregunta5",()=>{
            var respuesta5="Tel. (427) 129 20 00";
            io.emit("respuesta5",respuesta5);
        });
    });

}
module.exports=socket;