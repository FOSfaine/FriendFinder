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

        var totalDelta = 25;
        var delta = 0;

        //Loooping friendsArray:
        for (var i = 0; i < friendsData.length; i++) {

            //Looping scores:
            for (var j = 0; j < friendsData[i].scores; j++) {
                delta += Math.abs(friendsData[i].scores[j] - newFriendScores)
            }
            if (delta <= totalDelta) {

                //There is a problem here. NewFriendName herein defined is not in anyway connected to delta<=totalDelta above...
                newFriendName = friendsData[i].name;
                newFriendpic = friendsData[i].photo
            }
        }

        friendsData.push(surveyResults);
        res.json({
            status: true,
            friendMatch: newFriendName,
            friendMatchImg: newFriendpic
        });
    });
}

// Loooping friendsArray:
// for (var i = 0; i < friendsData.length; i++) {

//Looping scores:
// for (var j = 0; j < friendsData[i].scores; j++) {

//Looping through Delta Array
//Creating Delta Array:
// var delta = [Math.abs(friendsData[i].scores[j] - newFriendScores[j])]

// console.log(delta);

// for (var k = 0; k < delta.length; k++) {

//Sorting smallest number of Delta Array
// if delta[k] < delta[k + 1] {
//     delta[k] = delta[k + 1];

// friendMatch = friendsData[i].name;
// friendMatchImg = friendsData[i].photo
//                 }
//             }

//         }
//     })
// }


// function convertStringToInt(surveyResults) {
//     for (var i = 0; i < surveyResults.length; i++) {
//         surveyResults[i] = parseInt(surveyResults[i]);
//     }
// }