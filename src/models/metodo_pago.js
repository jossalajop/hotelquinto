const metodo_pago = (sequelize, type) => {
    return sequelize.define('metodo_pagos', {
        id_metodo_pago: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: type.STRING,

        crearMetodo_pago: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarMetodo_pago: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = metodo_pago