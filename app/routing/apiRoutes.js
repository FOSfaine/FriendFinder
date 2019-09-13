<<<<<<< HEAD
var friendsData = require('../data/friends');
=======
var friendsData = require('../app/data/friends');
>>>>>>> f7b96cb057254c55206aea1ed83e1aeeb580a804

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
        console.log(friendsData);
    })

    app.post('/api/friends', function (req, res) {
        //This is where the logic will go as to matching up the closest scores and suggesting friends!

        friendsData.push(req.body);
        res.json(true);
    });

}