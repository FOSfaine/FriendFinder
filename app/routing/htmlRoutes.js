var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
<<<<<<< HEAD
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
=======
        res.sendFile(path.join(__dirname, "public/home.html"));
    });

    app.get("/public/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "public/survey.html"));
>>>>>>> f7b96cb057254c55206aea1ed83e1aeeb580a804
    });
}