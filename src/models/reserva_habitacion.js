const reserva_habitacion = (sequelize, type) => {
    return sequelize.define('reserva_habitaciones', {
        id_reserva_habi: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_habitacion: type.STRING,
        fecha_Entrada: type.STRING,
        fecha_Salida: type.STRING,
        estado_reserva: type.STRING,

        crearReserva_habitacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarReserva_habitacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = reserva_habitacion