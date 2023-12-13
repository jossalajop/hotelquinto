const paquete_habitacionCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

paqueteCtl.mostrar = (req, res) => {
    res.render('paquete_habitacion/agregar');
}

//mandar
paquete_habitacionCtl.mandar = async (req, res) => {
    const id = req.id_paquete_habitacion
    const { observacion} = req.body
    const nuevoEnvio = {
        observacion   
    }
    await orm.paquete_habitacion.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/paquete_habitacion/listar/')
}

paquete_habitacionCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from paquete_habitaciones')
    res.render('paquete_habitacion/listar', { lista })
}

//traer datos
paquete_habitacionCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from paquete_habitaciones where id_paquete_habitacion =?', [ids])
    res.render('paquete_habitacion/editar', { lista })
}

paqueteCtl.actualizar = async (req, res) => {
    const ids=req.params.id
    const {observacion} = req.body
    const nuevoEnvio = {
        observacion                
    }
    await orm.paquete_habitacion.findOne({ where: { id_paquete_habitacion: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/paquete_habitacion/listar/');
}

paquete_habitacionCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.paquete_habitacion.destroy({ where: { id_paquete_habitacion: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/paquete_habitacion/listar/');
        })
}


module.exports = paquete_habitacionCtl
