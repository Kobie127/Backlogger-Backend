module.exports = app => {
    const movie = require("../controllers/movie.controller.js");

    var router = require("express").Router();

    // Create a new movie entry in the database
    router.post("/movie", movie.create)
    router.get("/movie", movie.findAll)

    app.use('/api/movies', router);
}