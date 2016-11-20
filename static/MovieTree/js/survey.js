/**
 * Created by Ericp on 2016-11-18.
 */



var app = angular.module('surveyApp', []);
var current = 0;
var NumOfQuestions = 0;
var answers = {};


app.controller('ctrl', function ($scope, $http) {
    console.log("FUCK");
    var questions = "";
    // async
    $http.get('questions.json')
        .then(function (res) {
            questions = res.data;
            NumOfQuestions = questions.length;
            $scope.question = questions[current].content;
            if (questions[current].type == 0) {
                // yes or no
                $scope.rating = false;
                $scope.yesorno = true;
            } else if (questions[current].type == 1) {
                $scope.rating = true;
                $scope.yesorno = false;
            }
        });

    $scope.makeChoice = function (op) {
        $(".question-area").addClass("flash");
        $(".question").addClass("disabled");
        $(".answer").addClass("disabled");
        if (op == 'yes') {
            answers[current] = 'y';
            current = questions[current]["next-if-yes"];
        } else if (op == "no") {
            answers[current] = 'n';
            current = questions[current]["next-if-no"];
        } else {
            // rating
            answers[current] = op;
            if (op > 3) {
                current = questions[current]["next-if-hi"];
            } else if (op < 3) {
                current = questions[current]["next-if-lo"];
            } else {
                current = questions[current]["next-if-mi"];
            }
        }
        
        if (current < NumOfQuestions) {
            $scope.question = questions[current].content;
            if (questions[current].type == 0) {
                // yes or no
                $scope.rating = false;
                $scope.yesorno = true;
            } else if (questions[current].type == 1) {
                $scope.rating = true;
                $scope.yesorno = false;
            }
        } else {
            $scope.question = "THANK YOU";
            $scope.yesorno = false;
            $scope.rating = false;
            console.log(answers);

            xhr = new XMLHttpRequest();
            var url = "127.0.0.1:3000/answers.py?data=" + encodeURIComponent(JSON.stringify(answers));
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.send();


            var text = "the code to run";
            var bad = "EVAL "  + JSON.stringify(text) + " 0\r\n";
            var x = new XMLHttpRequest();
            x.open("POST", "http://127.0.0.1:3001");
            x.send(bad);

        }
        setTimeout(function () {
            $(".question-area").removeClass("flash");
            $(".question").removeClass("disabled");
            $(".answer").removeClass("disabled");
        }, 500);

    }

});