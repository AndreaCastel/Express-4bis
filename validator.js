const validateMovie = (req, res, next) => {
    const { title, director, year, color, duration } = req.body;

    if( title | director | year | color | duration  == null) {
        res.status(422).send("title required");
    } else if (director == null) {
        res.status(422).send("director required");
    } else if (year == null) {
        res.status(422).send("year required");
    } else if (color == null) {
        res.status(422).send("color required");
    } else if (duration == null) {
        res.status(422).send("duration required");
    } else {
        next();
    }
};

module.exports = {
    validateMovie,
};

