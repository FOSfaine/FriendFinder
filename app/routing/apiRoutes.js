var friendsData = require('../data/friends');

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