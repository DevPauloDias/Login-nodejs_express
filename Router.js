const express = require('express');

const router = express.Router();

router.get('/', (req,res)=>{    
    
    res.sendFile(__dirname + '/view/login.html');
})
router.get('/cadastro', (req, res)=>{
    res.sendFile(__dirname + '/view/cadastro.html')
})

router.post('/cadastro', (req, res)=>{
    res.send('usuario cadastrado com sucesso!');
})
router.put('/cadastro/:id', (req, res)=>{
    res.send('editar usuário:');
})
router.delete('/cadastro/:id', (req, res)=>{
    res.send('Usuário deletado!');
})

module.exports = router;