const habitacion = (sequelize, type) => {
    return sequelize.define('habitaciones', {
        id_habitacion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        numero_habitaciones: type.STRING,
        estado_habitacion: type.STRING,

        crearHabitacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarHabitacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = habitacion