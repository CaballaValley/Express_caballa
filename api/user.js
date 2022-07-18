const express = require('express');
const router = express.Router();

const userRouter = () =>{

    router.get('/', (req, res) => {
        console.log('Get pasando datos por query')
        console.log(req.query);
        return res.status(200).json({
            mensaje: "Eres un maquina",
            data: req.query
        })
    })

    router.get('/name/:name/:apellidos', (req, res) => {
        console.log('Get pasando datos por parametros')
        console.log(req.params);
        res.send(req.params)
    })

    router.post('/', (req, res) => {
        console.log('POST pasando datos por body')
        console.log(req.body);
        res.send(req.body)
    })
    
    return router;
}

module.exports = userRouter;