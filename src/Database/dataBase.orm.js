const { Sequelize } = require("sequelize");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require("../keys");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
});

//const sequelize = new Sequelize(MYSQL_URI);

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});

	const categoriaModel = require('../models/categoria');
	const usuarioModel = require('../models/usuario');
	const rolModel = require('../models/rol');
	const reserva_habitacionModel = require('../models/reserva_habitacion');
	const gastoModel = require('../models/gasto');
	const paqueteModel = require('../models/paquete');
	const paquete_habitacionModel = require('../models/paquete_habitacion');
	const servicioModel = require('../models/servicio');
	const habitacionModel = require('../models/habitacion');
	const transaccionModel = require('../models/transaccion');
	const metodo_pagoModel = require('../models/metodo_pago');
	const tipo_habitacionModel = require('../models/tipo_habitacion');

//sincronia

const categoria = categoriaModel(sequelize, Sequelize)
const usuario = usuarioModel(sequelize,Sequelize)
const rol = rolModel(sequelize,Sequelize)
const reserva_habitacion = reserva_habitacionModel(sequelize,Sequelize)
const gastos = gastoModel(sequelize,Sequelize)
const paquete = paqueteModel(sequelize,Sequelize)
const paquete_habitacion = paquete_habitacionModel(sequelize,Sequelize)
const servicio = servicioModel(sequelize,Sequelize)
const habitacion = habitacionModel(sequelize,Sequelize)
const transaccion = transaccionModel(sequelize,Sequelize)
const metodo_pago = metodo_pagoModel(sequelize,Sequelize)
const tipo_habitacion = tipo_habitacionModel(sequelize,Sequelize)

//relaciones

usuario.hasMany(rol);
rol.belongsTo(usuario);
usuario.hasMany(reserva_habitacion);
reserva_habitacion.belongsTo(usuario);
reserva_habitacion.hasMany(gastos);
gastos.belongsTo(reserva_habitacion);
habitacion.hasMany(reserva_habitacion);
reserva_habitacion.belongsTo(habitacion);
reserva_habitacion.hasMany(paquete);
paquete.belongsTo(reserva_habitacion);
paquete.hasMany(paquete_habitacion);
paquete_habitacion.belongsTo(paquete);
reserva_habitacion.hasMany(transaccion);
transaccion.belongsTo(reserva_habitacion);
tipo_habitacion.hasMany(habitacion);
habitacion.belongsTo(tipo_habitacion)
tipo_habitacion.hasMany(categoria);
categoria.belongsTo(tipo_habitacion);
metodo_pago.hasMany(transaccion);
transaccion.belongsTo(metodo_pago);
paquete_habitacion.hasMany(transaccion);
transaccion.belongsTo(paquete_habitacion);
gastos.hasMany(servicio);
servicio.belongsTo(gastos);
gastos.hasMany(transaccion);
transaccion.belongsTo(gastos);



module.exports = {
	categoria,
	usuario,
    rol,
    reserva_habitacion,
    gastos,
    paquete,
	paquete_habitacion,
    servicio,
    habitacion,
    transaccion,
    metodo_pago,
	tipo_habitacion,
};