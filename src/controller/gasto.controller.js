const gastoCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

gastoCtl.mostrar = (req, res) => {
    res.render('gasto/agregar');
}

//mandar
gastoCtl.mandar = async (req, res) => {
    const id =req.id_gasto
    const { cantidad, precio  } = req.body
    const nuevoEnvio = { 
        cantidad, 
        precio
    }
    await orm.gasto.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/gasto/listar/')
}

gastoCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from gastos')
    res.render('gasto/listar', { lista })
}

//traer datos
gastoCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from gastos where id_gasto =?', [ids])
    res.render('gasto/editar', { lista })
}

gastoCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { cantidad, precio  } = req.body
    const nuevoEnvio = {
        cantidad,
        precio
    }
    await orm.gasto.findOne({ where: { id_gasto: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/gasto/listar/');
}
gastoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.gasto.destroy({ where: { id_gasto: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/gasto/listar/');
        })
}


module.exports = gastoCtl