const transaccion = (sequelize, type) => {
    return sequelize.define('transacciones', {
        id_transaccion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        costo_total: type.STRING,
        info_pago: type.STRING,

        crearTransaccion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarTransaccion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = transaccion