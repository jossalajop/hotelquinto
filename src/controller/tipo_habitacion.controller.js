const tipo_habitacionCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

tipo_habitacionCtl.mostrar = (req, res) => {
    res.render('tipo_habitacion/agregar');
}

//mandar
tipo_habitacionCtl.mandar = async (req, res) => {
    const id =req.id_tipo_habitacion
    const { camas,exterior,salon,terraza } = req.body
    const nuevoEnvio = { 
        camas,
        exterior,
        salon,
        terraza
    }
    await orm.tipo_habitacion.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/tipo_habitacion/listar/')
}

tipo_habitacionCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from tipo_habitaciones')
    res.render('tipo_habitacion/listar', { lista })
}

//traer datos
tipo_habitacionCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from tipo_habitaciones where id_tipo_habitacion =?', [ids])
    res.render('tipo_habitacion/editar', { lista })
}

tipo_habitacionCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const {  camas,exterior,salon,terraza } = req.body
    const nuevoEnvio = {
        camas,
        exterior,
        salon,
        terraza
    }
    await orm.tipo_habitacion.findOne({ where: { id_tipo_habitacion: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/tipo_habitacion/listar/');
}
tipo_habitacionCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.tipo_habitacion.destroy({ where: { id_tipo_habitacion: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/tipo_habitacion/listar/');
        })
}


module.exports = tipo_habitacionCtl