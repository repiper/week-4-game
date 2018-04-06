
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

    $("#crystals").empty();

    var images = [
        'assets/images/Emerald.jpg', 
        'https://cdn.leibish.com/media/gemstones/thumb_1280/gemstone-172548-ruby-pear-red-cf763.jpg', 
        'http://cmweldon.ie/wp-content/uploads/2014/04/kashmir-blue-sapphire-b2670.jpg', 
        'https://diamondblend.files.wordpress.com/2012/11/high-res-diamond-image.jpg'];

    random_result = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
            console.log(random);

        var crystal = $("<div>");

            crystal.addClass("crystal"); 

            crystal.attr("score", random);

            var image = $("<img>");

            image.attr("src", images[i]);

            crystal.append(image); 

            /* crystal.css({
                "background-image":"url('" + (images[i] + "')",
                "background-size":"cover"
            }); */

        $("#crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous); 
}


resetAndStart();


// Event Delegation
$(document).on('click', ".crystal", function() {

   var num = parseInt($(this).attr('score'));
    console.log(num);

   previous += num;
   

   $("#previous").html("Total Score: " + previous);

   //console.log(previous);


   if(previous> random_result){
      lost++; 

      $("#lost").html("You lost: " + lost);
      resetAndStart();

      previous = 0;     

      resetAndStart();

    //console.log("You Lost!");
   }

   else if(previous === random_result){
      win++;   
    //console.log("You Win!");

    $("#win").html("You win: " + win);

    previous = 0;

    resetAndStart();
   }
   
});

//Pseudo Coding

// A game with 4 crystals displayed as buttons on page

// A random number will be displayed
// Every crystal has a random number between 1-12
// When the user selects crystals, each random number should be added
// Each crystal will generate a random number every time the user wins or loses