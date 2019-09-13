var path = require("path");
var friendsData = require('../data/friends');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
        console.log(friendsData);
    })
    app.post('/api/friends', function (req, res) {

        var surveyResults = req.body;

        // convertStringToInt(surveyResults.scores);

        var newFriendScores = surveyResults.scores;
        var friendMatch = "";
        var frendMatchImg = "";

        var totalDelta = 100;
        var delta = 0;

        //Loooping friendsArray:
        //         for (var i = 0; i < friendsData.length; i++) {

        //             //Looping scores:
        //             for (var j = 0; j < friendsData[i].scores; j++) {
        //                 var delta = [Math.abs(friendsData[i].scores[j] - newFriendScores[j])]

        //                 //sorting through deltas
        //                 for (var k = 0; k < delta.length; k++) {
        //                     if delta[k] < delta[k + 1] {
        //                         delta[k] = delta[k + 1];

        //                         friendMatch = friendsData[i].name;
        //                         friendMatchImg = friendsData[i].photo
        //                     }
        //                 }

        //             }
        //         }
        //     }
        // }


        //Loooping friendsArray:
        for (var i = 0; i < friendsData.length; i++) {

            //Looping scores:
            for (var j = 0; j < friendsData[i].scores; j++) {
                delta += Math.abs(friendsData[i].scores[j] - newFriendScores[j])
            }
            if (delta < totalDelta) {
                totalDelta = delta;

                friendMatch = friendsData[i].name;
                friendMatchImg = friendsData[i].photo
            }
        }

        friendsData.push(surveyResults);
        res.json({
            status: true,
            friendMatch: friendMatch,
            friendMatchImg: friendMatchImg
        });
    });
}

// function convertStringToInt(surveyResults) {
//     for (var i = 0; i < surveyResults.length; i++) {
//         surveyResults[i] = parseInt(surveyResults[i]);
//     }
// }