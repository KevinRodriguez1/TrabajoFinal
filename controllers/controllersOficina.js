var express = require('express');

const listOficina = (req, res, next) => {
    const db = req.app.get("db");
    const query = "SELECT * from oficina";
    db.query(query, function(err, rows){ // metodo para que corra la consulta //function toma dos parametros: manipulador de error, fila de las tablas.
        if (err){
          console.log(err);
          return;
        }
        res.render("oficinas", { oficinas: rows, title:"Oficinas"}); //dibujar la plantilla en el navegador por medio de "vista/personas.ejs" //Render toma: nombre de la plantilla y un objeto con info, a ese objeto le paso como valor las filas de datos.
    })
};

const getAgregarOf = (req, res, next) => { //ruta para get agregar.
    res.render('agregarOf',  { title: "Agregar Oficina" });
  };

const postAgregarOficina = (req,res,next) => {
    const db = req.app.get("db"); //conexion a base de datos.
    const denominacion = req.body.denominacion //saco del form la info en la parte de denominacion.
    const query = "INSERT into oficina(denominacion) VALUES (?)"; //agrego datos al form por medio de query.
    db.query(query, [denominacion], function(err){ //hago funcionar la base de datos por medio de insertar datos(query) donde va a recibir un array de denominacion.
      if (err){
        console.log(err);
        return;
      }
      res.redirect("/oficinas"); //en la respuesta me redirige a la url tabla personas.
    })
  };

const geteditarOficina = (req, res, next) => {
    var db = req.app.get("db");
    var id = req.params.id;
    db.query("SELECT * FROM oficina WHERE id=?", [id], function(err, rows) {
        if (err) {
          console.error(err);
          return;
        }
        res.render('editarOf', {item: rows[0], title:"Editar"}); // va a mostrar por navegador la fila del item consultado.
      });
  }; 

const postModificarOficina = (req, res, next) => {
    var db = req.app.get("db");
    var id = req.params.id;
    var denominacion = req.body.denominacion
    db.query("UPDATE oficina SET denominacion=?  WHERE id=?", [denominacion,id], function(err) {
        if (err) {
          console.log(err)
          return;
        }
        res.redirect('/oficinas');
      });
    }; 

const getElimOf = (req, res, next) => {
    var db = req.app.get('db'); 
    var id = req.params.id;
    db.query("DELETE FROM oficina WHERE id=?",id, function(err) {
        if (err) {
        console.log(err)
        return;
        }
        res.redirect('/oficinas');
    });
};

const postElimOf = function(req, res,next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.query("DELETE FROM oficina WHERE id=?", id, function(err) {
        if (err) {
            console.error(err);
            return;
        }
        res.redirect('/oficinas');
    });
};

const getBuscarOficina = (req, res, next) => {
    res.render('busquedaOf', {title:"Buscar"});
};

const postBuscarOfResultados = (req, res,next) => {
    const db = req.app.get("db");
    const keyword = req.body.keyword;
    const query = 'SELECT * FROM oficina WHERE denominacion LIKE ?';
    db.query(query, [`%${keyword}%`], (err, rows) => {         // query para hacer una busqueda con la palabra "keyword"
        if (err) throw err;
        res.render('resultadosOf', {oficinas:rows, title: "resultadosOf" })
        });
};


module.exports = {
    listOficina,
    getAgregarOf,
    postAgregarOficina,
    geteditarOficina,
    postModificarOficina,
    getElimOf,
    postElimOf,
    getBuscarOficina,
    postBuscarOfResultados
};
