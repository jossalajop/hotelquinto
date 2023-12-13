const categoriaCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

categoriaCtl.mostrar = (req, res) => {
    res.render('categoria/agregar');
}

//mandar
categoriaCtl.mandar = async (req, res) => {
    const id =req.id_categoria
    const { nombre_categoria  } = req.body
    const nuevoEnvio = { 
        nombre_categoria
    }
    await orm.categoria.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/categoria/listar/')
}

categoriaCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from categorias')
    res.render('categoria/listar', { lista })
}

//traer datos
categoriaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from categorias where id_categoria =?', [ids])
    res.render('categoria/editar', { lista })
}

categoriaCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { nombre_categoria  } = req.body
    const nuevoEnvio = {
        nombre_categoria
    }
    await orm.categoria.findOne({ where: { id_categoria: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/categoria/listar/');
}
categoriaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.categoria.destroy({ where: { id_categoria: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/categoria/listar/');
        })
}


module.exports = categoriaCtl