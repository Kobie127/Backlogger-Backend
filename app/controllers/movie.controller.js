const db = require("../models");
const Movie = db.movies;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty"
        })
        return;
    }

    const movie = {
        title: req.body.title,
        description: req.body.description,
        release: req.body.release,
        director: req.body.director
    };

    Movie.create(movie)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the Movie."
            });
        });
};

exports.findAll = (req, res) => {

};

exports.findOne = (req, res) => {
    
}

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

