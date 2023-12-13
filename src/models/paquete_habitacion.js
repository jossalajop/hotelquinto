const paquete_habitacion = (sequelize, type) => {
    return sequelize.define('paquete_habitaciones', {
        id_paquete_habitacion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        observacion: type.STRING,

        crearPaquete_habitacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarPaquete_habitacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = paquete_habitacion