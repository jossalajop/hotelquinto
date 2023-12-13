const rolCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

rolCtl.mostrar = (req, res) => {
    res.render('rol/agregar');
}

//mandar
rolCtl.mandar = async (req, res) => {
    const id = req.id_rol
    const { nombre_rol} = req.body
    const nuevoEnvio = {
        
        
        nombre_servicio,
        descripcion_servicio,
        precio_servicio
    }
    await orm.servicio.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/servicio/listar/')
}

rolCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from servicios')
    res.render('servicio/listar', { lista })
}

//traer datos
rolCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from paquetes where id_servicio =?', [ids])
    res.render('servicio/editar', { lista })
}

rolCtl.actualizar = async (req, res) => {
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

rolCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.paquete.destroy({ where: { id_servicio: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/servicio/listar/');
        })
}


module.exports = rolCtl

