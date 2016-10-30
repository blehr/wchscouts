//initialize count and score and question number
var count = 0;
var score = 0;
var questNum = 1;
var userChoicesArray = [];
var jsonLoc = "js/quiz.json";





$(document).ready(function() {
    // $('.nav-button').on('click', function() {
    //     $('#mobile-nav').toggleClass("show-m-nav");
    // });
    // $('ul.main-mobile-nav li').on('click', function() {
    //     $('#mobile-nav').toggleClass("show-m-nav");
    // });




    function displayStartPage() {
        $(".quiz").hide();
        $("#start").click(function() {
            $("#startPage").fadeOut();
            $(".quiz").fadeIn("slow");
            $(displayChoices());
        });
    }


    //Pull questions from json 
    // var allQuestions = (function() {
    //     var allQuestions = null;
    //     $.ajax({
    //         'async': false,
    //         'global': false,
    //         'url': jsonLoc,
    //         'dataType': "json",
    //         'success': function(data) {
    //             allQuestions = data;
    //         }
    //     });
    //     return allQuestions;
    // })();




    //loop through choices for current question assign a radio button and value array index
    var displayChoices = function() {
        $("#content").fadeOut();

        //show content
        $("#content").fadeIn(function() {
            $("#choices").empty();
            for (var i = 0; i < data[count]["choices"].length; i++) {
                var choice = data[count]["choices"];

                //append choices
                $("#choices").append('<label><input type= "radio" name="choice" class="choice" value="' + i + '"  >' + " " + choice[i] + '</br></label>').fadeIn();
            }
            //display previously answered choices
            if (userChoicesArray[count] !== undefined) {
                var x = userChoicesArray[count];
                $('input:radio[value="' + x + '"]').prop('checked', true);

            }
            //append question
            {
                $("#question").empty().append("<h3>" + data[count]["question"] + "</h3>").fadeIn();
            }

            //display status

            $("#quiz-nav").fadeIn();
            $(".back-next").fadeIn();
            $("#status").fadeIn();
            $('#status p:first').text("Question number " +
                questNum + " of " + data.length);
            $('#status p:last').text("Your score is " + score);


        });

    };




    //update score
    function updateScore(change) {
        score += change;
    }



    //decrease score on correct back
    function backCorrect() {
        if (count > data.length - 1) {
            var y = userChoicesArray[count - 1];
            if (y == data[count - 1].correctAns && score > 0) {
                updateScore(-1);
            }
        }

        if (userChoicesArray[count] !== undefined) {
            var x = userChoicesArray[count];
            if (x == data[count].correctAns && score > 0) {
                updateScore(-1);
            }
        }
    }



    //   show final score
    function showFinal() {
        $("#content").slideUp(function() {

            $('#status').hide();
            $('#question').empty().append("<h2> Your score is " +
                score + " / " + data.length + "</h2>");
            $("#choices").hide();
            $(".back-next").hide();
            $("#try-again").show();

        });
        $("#content").slideDown();
    }



    //  reset variables
    function reset() {
        count = 0;
        score = 0;
        questNum = 1;
        userChoicesArray = [];
    }


    //  try again
    $('#try-again').click(function() {
        $(reset());
        $("#try-again").hide();
        $(displayChoices());
    });





    //runtime function call
    $(displayStartPage());
    $(displayChoices());

    $("#next ").click(function() {

        if (count >= data.length) {
            return;
        }
        //collect userChoice
        var userChoice = $('input:radio[name=choice]:checked').val();

        //if no choice is made
        if (userChoice === undefined) {
            $("#question").fadeOut();
            $("#question").fadeIn(function() {
                $("#question").empty().append("<h3>" +
                    data[count]["question"] + "</h3>");
                $("#question").fadeIn().append("<h3 class='warning'>Please make a selection</h3>");
            });



            return;

        } else
        //correct answer
        if (userChoice == data[count].correctAns) {
            updateScore(1);
        }
        //push answers to array
        userChoicesArray[count] = userChoice;
        $("#content").fadeOut();
        $("#question").empty();
        $("#choices").empty();

        questNum++;
        count++;

        //anymore questions?
        if (count < data.length) {
            $(displayChoices());

        } else {
            $(showFinal());


        }

    });

    $('#back').click(function() {
        if (count <= 0) {
            return;
        }
        count--;
        questNum--;
        $(backCorrect());
        $("#content").fadeOut();
        $('#status p:first').text("Question number " +
            questNum + " of " + data.length).fadeIn();
        $('#status p:last').text("Your score is " + score).fadeIn();
        $(displayChoices());
    });

});