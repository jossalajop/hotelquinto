const rol = (sequelize, type) => {
    return sequelize.define('roles', {
        id_rol: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_rol: type.STRING,

        crearRol: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarRol: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = rol