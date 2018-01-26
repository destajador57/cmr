var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');
var Usuario = require('./models/Usuario');

var app = express();

var publicacion = [
    { mensaje: 'hola' },
    { mensaje: 'mundo' }
];

app.use(cors());
app.use(bodyParser.json());

app.get('/publicacion', (req, res) => {
    res.send(publicacion);
});

app.get('/usuarios', (req, res) => {
    var usuarios = [
        {correo:'d@d',contrasena:'123'},
        {correo:'destajador57@hotmail.com',contrasena:'123wqer'}
    ];
    console.log(usuarios);
    res.send(usuarios);
});

app.post('/registrar', (req, res) => {
    var usuarioData = req.body;

    console.log(usuarioData.correo);
    console.log(usuarioData.contrasena);

    usuarioNuevo = new Usuario(usuarioData);

    console.log('usuario completo');
    console.log(usuarioNuevo);
    res.sendStatus(200);
});

app.post('/login', (req, res) => {
    var usuarioData = req.body;

    console.log(usuarioData.correo);
    console.log(usuarioData.contrasena);

    usuarioNuevo = new Usuario(usuarioData);

    console.log('usuario completo');
    console.log(usuarioNuevo);
    if(!usuarioNuevo)
        return res.status(401).send({message : 'Correo o contraseña invalido.'});

    if(usuarioNuevo.correo != 'd@d')
        return res.status(401).send({message : 'Correo o contraseña invalido.'});

    var payload = {};

    var token = jwt.encode(payload,'123');

    console.log(token);

    res.status(200).send({token});
});

app.listen(3000);