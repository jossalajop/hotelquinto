const servicio = (sequelize, type) => {
    return sequelize.define('servicios', {
        id_servicio: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_servicio: type.STRING,
        descripcion_servicio: type.STRING,
        precio_servicio: type.STRING,

        crearServicio: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarServicio: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = servicio