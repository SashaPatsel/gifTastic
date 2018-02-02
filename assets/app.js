// Gify API key: a64tsKY6caQDzcQq7BmcmBoZmJz1FWOf

var topics = ["the office", "game of thrones", "the walking dead",
 "house of cards", "breaking bad", "stranger things"]

 function newButtons() {
 	$(".button-div").empty();
 		for (var i = 0 ; i < topics.length ; i++) {
 			var gifButton = $("<button>")
 			gifButton.addClass("button-style")
 			gifButton.text(topics[i])
 			gifButton.attr("data-name", topics[i])
 			$(".button-div").append(gifButton)
 		}

 	}
newButtons()
    
    function giveMeShows() {
    	$(".more-gifs").empty();
      var userSearch = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        userSearch + "&api_key=a64tsKY6caQDzcQq7BmcmBoZmJz1FWOf&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var masterDiv = $("<div class='img-container'>")

            var p = $("<p>").text("Rating: " + rating);
            p.addClass("rating")
            console.log(results[i].images.fixed_height_still.url);
            var chosenImage = $("<img>");
            chosenImage.attr("src", results[i].images.fixed_height.url);
            chosenImage.attr("data-still", results[i].images.fixed_height_still.url)
            chosenImage.attr("data-animate", results[i].images.fixed_height.url)
            chosenImage.attr("data-state", "still")
            chosenImage.addClass("gif")
            // gifDiv.html(p);
            gifDiv.prepend(chosenImage);
            masterDiv.prepend(gifDiv)
            masterDiv.append(p)
            $(".more-gifs").prepend(masterDiv);

          }
        });
      }
//all in a div
//If array reaches certain count, new div
    $(document).on("click",".gif", function() {
 				console.log("hi");
        var state = $(this).attr("data-state");
        // console.log(state);

        var dataAnimate = $(this).attr("data-animate");
        var dataStill = $(this).attr("data-still");
       

        if (state === "still") {
        	 console.log(dataAnimate);
        console.log(dataStill);
          $(this).attr("src", dataAnimate);
          $(this).attr("data-state", "animate");
          console.log(state);
        } else if (state === "animate") {
          $(this).attr("src", dataStill);
          $(this).attr("data-state", "still");
         
        }

    });
    
    $("#add-gifs").on("click", function(event) {
        event.preventDefault();

        var newShow = $(".gif-input").val().trim();

        topics.push(newShow);
        console.log("i'm listening")
        newButtons();
        
      });
    $(document).ready(function(){
    $("button").click(function(){
        $("p").slideToggle();
    });
});

      $(document).on("click", ".button-style", giveMeShows);
