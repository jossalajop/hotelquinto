const inicioCtl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


inicioCtl.Mostrar = (req, res) => {
    res.render('inicio');
}

inicioCtl.mandar = async(req, res)=>{
    const { ciudad, nombre, provincia, canton} = req.body
    const nuevoEvio ={
        ciudad,
        nombre,
        provincia,
        canton
    }
    await orm.inicio.create(nuevoEvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/inicio');
}
module.exports  = inicioCtl