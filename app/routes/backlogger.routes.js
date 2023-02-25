module.exports = app => {
    const movie = require("../controllers/movie.controller.js");

    var router = require("express").Router();

    // Create a new movie entry in the database
    router.post("/movie", movie.create)

    app.use('/api/movies', router);
}