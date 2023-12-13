const inicio2Ctl = {}
const sql = require('../Database/dataBase.sql')
const orm = require('../Database/dataBase.orm')


inicio2Ctl.Mostrar = (req, res) => {
    res.render('inicio2');
}

inicio2Ctl.mandar = async(req, res)=>{
    const { ciudad, nombre, provincia, canton} = req.body
    const nuevoEvio ={
        ciudad,
        nombre,
        provincia,
        canton
    }
    await orm.inicio2.create(nuevoEvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/inicio2');
}
module.exports  = inicio2Ctl