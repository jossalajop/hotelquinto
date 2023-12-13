const servicioCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

servicioCtl.mostrar = (req, res) => {
    res.render('servicio/agregar');
}

//mandar
servicioCtl.mandar = async (req, res) => {
    const id = req.id_servicio
    const { nombre_servicio,descripcion_servicio,precio_servicio} = req.body
    const nuevoEnvio = {
        nombre_servicio,
        descripcion_servicio,
        precio_servicio
    }
    await orm.servicio.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/servicio/listar/')
}

servicioCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from servicios')
    res.render('servicio/listar', { lista })
}

//traer datos
servicioCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from paquetes where id_servicio =?', [ids])
    res.render('servicio/editar', { lista })
}

servicioCtl.actualizar = async (req, res) => {
    const ids=req.params.id
    const {nombre_servicio,descripcion_servicio,precio_servicio} = req.body
    const nuevoEnvio = {
        nombre_servicio,
        descripcion_servicio,
        precio_servicio              
    }
    await orm.servicio.findOne({ where: { id_servicio: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/servicio/listar/');
}

servicioCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.paquete.destroy({ where: { id_servicio: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/servicio/listar/');
        })
}


module.exports = servicioCtl

