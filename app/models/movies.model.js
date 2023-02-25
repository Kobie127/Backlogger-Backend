// Movies model for how the data will be structured in the database table

module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        release: {
            type: Sequelize.DATE
        },
        director: {
            type: Sequelize.STRING
        }
    });

    return Movie;
}