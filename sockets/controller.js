
const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 123456;
        // Retorna algo al cliente cuando se recibió correctamente el mensaje, corresponde al callback del método del cliente
        callback(id);
        // Emitir a todos los clientes
        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = {
    socketController
}