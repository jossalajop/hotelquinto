const paquete = (sequelize, type) => {
    return sequelize.define('paquetes', {
        id_paquete: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_paquete: type.STRING,
        costo_paquete: type.STRING,
        tiempo_estadia: type.STRING,
        descripcion: type.STRING,

        crearPaquete: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarPaquete: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = paquete