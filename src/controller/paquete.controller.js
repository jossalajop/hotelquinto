const paqueteCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

paqueteCtl.mostrar = (req, res) => {
    res.render('paquete/agregar');
}

//mandar
paqueteCtl.mandar = async (req, res) => {
    const id = req.id_paquete
    const { nombre_paquete,costo_paquete,tiempo_estadia,descripcion} = req.body
    const nuevoEnvio = {
        nombre_paquete,
        costo_paquete,
        tiempo_estadia,
        descripcion    
    }
    await orm.paquete.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/paquete/listar/')
}

paqueteCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from paquetes')
    res.render('paquete/listar', { lista })
}

//traer datos
paqueteCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from paquetes where id_paquete =?', [ids])
    res.render('paquete/editar', { lista })
}

paqueteCtl.actualizar = async (req, res) => {
    const ids=req.params.id
    const {nombre_paquete,costo_paquete,tiempo_estadia,descripcion} = req.body
    const nuevoEnvio = {
        nombre_paquete,
        costo_paquete,
        tiempo_estadia,
        descripcion                  
    }
    await orm.paquete.findOne({ where: { id_paquete: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/paquete/listar/');
}

paqueteCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.paquete.destroy({ where: { id_paquete: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/paquete/listar/');
        })
}


module.exports = paqueteCtl

