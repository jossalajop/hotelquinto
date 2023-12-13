const usuario = (sequelize, type) => {
    return sequelize.define('usuarios', {
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_terminal: type.STRING,
        calle_principal_terminal: type.STRING,
        calle_secundaria_terminal: type.STRING,
        username_terminal: type.STRING(99),
        password_terminal: type.STRING,

        crearTerminal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarTerminal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
}
module.exports = usuario