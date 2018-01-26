class Usuario{
    
    constructor(nuevoUsuario) {
        this.correo = nuevoUsuario.correo;
        this.contrasena = nuevoUsuario.contrasena;
    }
}

module.exports = Usuario;