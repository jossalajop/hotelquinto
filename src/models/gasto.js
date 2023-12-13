const gasto = (sequelize, type) => {
    return sequelize.define('gastos', {
        id_gasto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: type.STRING,
        precio: type.STRING,

        crearGasto: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarGasto: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = gasto