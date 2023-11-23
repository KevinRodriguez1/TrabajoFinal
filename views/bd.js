const mysql  = requiere('mysql2');
const bd = mysql.createConnection({
    host:'localhost',
    user:'root ',
    password:'1234 '

});

//Conectarno al servidos
db.connect((err) => {
    if (err){
        console.log("Error en la conexion al servidor");
        return;
    } 

    /// Verificar si existe la base de  datos

    bd.query("CREATE DATABASE IF  NOT EXITS",(err) => {
        if (err){
            console.log("Error en la creacion de la base de datos");
            return; 
        }
                console.log("Base de datos creada");
    });


    // Seleccionar base de datos
    bd.query("USE personas",(err) => {
        if (err){
            console.log("Error en la creacion de la base de datos");
            return; 
        }
        console.log("Base de datos creada");
   });


    // Verificar si exite la tabla persona
    const createTableSQL = ` 
        CREATE TABLE IF NOT EXITS persona(
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(50),
            apellido VARCHAR(50),
            email VARCHAR(255)
        )
    
    
    ` ;
    bd.query(createTableSQL, (err) = {
        if (err){
            console.log("Error en la creacion de la base de datos");
            return; 
        }

    });

});

module.exports = bd;