var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
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

//-------------------------------------------------  INICIO CARGA DE ARCHIVOS

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});

var upload = multer({ //multer settings
                storage: storage
            }).single('file');

app.post('/upload', function(req, res) {
    console.log('----------------Inicia la carga del archivo-----------------------');
    upload(req,res,function(err){
        if(err){
                console.log(err);
             res.json({error_code:1,err_desc:err});
             return;
        }
         res.json({error_code:0,err_desc:null});
    });
});

//-------------------------------------------------  FIN CARGA DE ARCHIVOS

app.listen(3000);