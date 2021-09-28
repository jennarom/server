import express from 'express';
const router=express.Router();

import Producto from '../models/productos';

//agregar un producto

router.post('/producto-nuevo', async (req, res)=>{
    const body=req.body;

    try {
        const productoDB=await Producto.create(body);
        res.status(200).json(productoDB);

    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
});

router.get('/producto/:id', async(req,res)=>{
    const _id=req.params.id;

    try {
        const productoDB=await Producto.findOne({_id});
        res.json(productoDB);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }
});

router.get('/producto/:date', async(req,res)=>{
    const _date=req.params.date;

    try {
        const productoDB=await Producto.find({date});
        res.json(productoDB);
    } catch (error) {
        return res.status(500).json({
            mensaje:'Ocurrió un error',
            error
        })
    }


});

// Get con todos los documentos
router.get('/producto', async(req, res) => {
    try {
        const productoDB = await Producto.find();
        res.json(productoDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//borrar registro
router.delete('/producto/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const productoDB = await Producto.findByIdAndDelete({_id});
        if(!productoDB){
            return res.status(500).json({
            mensaje: 'No se encontró el id indicado',
            error
        })
    }
    res.json(productoDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//actualizar registro
router.put('/producto/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const productoDB = await Nota.findByIdAndUpdate(
            _id, body,
            {new: true});
            res.json(productoDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});




//exportar la configuracion

module.exports = router;