const tipo_habitacion= (sequelize, type) => {
    return sequelize.define('tipo_habitaciones', {
        id_tipo_habitacion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        camas: type.STRING,
        exterior: type.STRING,
        salon: type.STRING,
        terraza: type.STRING,

        crearTipo_habitacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarTipo_habitacion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = tipo_habitacion