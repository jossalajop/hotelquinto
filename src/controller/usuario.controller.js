const usuarioCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')

usuarioCtl.mostrar = (req, res) => {
    res.render('usuario/agregar');
}

//mandar
usuarioCtl.mandar = async (req, res) => {
    const id =req.id_usuario
    const { password,nombre,apellido,telefono } = req.body
    const nuevoEnvio = { 
        email,
        password,
        nombre,
        apellido,
        telefono
    }
    await orm.usuario.create(nuevoEnvio)
    req.flash('success', 'Guardado exitosamente')
    res.redirect('/usuario/listar/'+ id)
}

usuarioCtl.listar = async (req, res) => {
    const lista = await sql.query('select * from usuarios')
    res.render('usuario/listar', { lista })
}

//traer datos
usuarioCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from usuarios where id_usuario =?', [ids])
    res.render('usuario/editar', { lista })
}

usuarioCtl.actualizar = async (req, res) => {
    const ids = req.params.id
    const { email,password,nombre,apellido,telefono } = req.body
    const nuevoEnvio = {
        email,
        password,
        nombre,
        apellido,
        telefono
    }
    await orm.usuario.findOne({ where: { id_usuario: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
        })
    req.flash('success', 'Actualizado exitosamente')
    res.redirect('/usuario/listar/'+id);
}
usuarioCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    await orm.usuario.destroy({ where: { id_usuario: ids } })
        .then(() => {
            req.flash('success', 'Eliminado exitosamente')
            res.redirect('/usuario/listar/'+ id);
        })
}


module.exports = usuarioCtl