const transaccion = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

transaccionCtl.mostrar = (req, res) => {
    res.render('transaccion/agregar');
}

//mandar
transaccion.mandar = async (req, res) => {
    const id =req.id_transaccion
    const {  costo_total,info_pago } = req.body
    const nuevoEnvio = { 
        costo_total,
        info_pago
    }
    await orm.transaccion.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/transaccion/listar/')
}

transaccionCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from transacciones')
    res.render('transaccion/listar', { lista })
}

//traer datos
transaccionCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from transacciones where id_transaccion =?', [ids])
    res.render('transaccion/editar', { lista })
}

transaccionCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { costo_total,info_pago  } = req.body
    costo_total,
    info_pago
    const nuevoEnvio = {
        
    }
    await orm.transaccion.findOne({ where: { id_transaccion: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/transaccion/listar/');
}
transaccionCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.transaccion.destroy({ where: { id_transaccion: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/transaccion/listar/');
        })
}


module.exports = transaccionCtl