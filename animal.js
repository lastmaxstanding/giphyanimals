$( document ).ready(function() {

var animals = ['bird'];


function displayGiphy(){

    var giphy = $(this).data('data-name');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
                
        var results = response.data;
            for (var i = 0; i < results.length; i++) {

                if (results[i].rating == "r" || results[i].rating == "pg-13")
                    {
                    }
                    else {
                      var gifDiv = $('<div class="item">')

                      var rating = results[i].rating;

                      var p = $('<p>').text( "Rating: " + rating);

                      var animalImage = $('<img>');

                      animalImage.attr('src', results[i].images.fixed_height.url);
                      animalImage.attr('data-still', results[i].images.fixed_height_still.url);
                      animalImage.attr('data-animate', results[i].images.fixed_height.url);
                      animalImage.addClass("stateGif");

                      gifDiv.append(p)
                      gifDiv.append(animalImage)

                    $('#animalGifs').prepend(gifDiv);

                     }
             }


       });

    }


    //$('button').on('click', function() {
        //var p = $(this).data('data-animal');
        //var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

        //$.ajax({
                //url: queryURL,
                //method: 'GET'
            //})
            //.done(function(response) {
                //var results = response.data;

                //for (var i = 0; i < results.length; i++) {
                    //var gifDiv = $('<div class="item">')

                    //var rating = results[i].rating;

                    //var p = $('<p>').text("Rating: " + rating);

                    //var animalImage = $('<img>');
                    //animalImage.attr('src', results[i].images.fixed_height.url);

                    //gifDiv.append(p)
                    //gifDiv.append(animalImage)

                    //$('#animalGifs').prepend(gifDiv);
                //}

            //});
    //});

function renderButtons(){ 

$('#animalView').empty();

for (var i = 0; i < animals.length; i++){
    var a = $('<button>')

    a.addClass('aniBtn');
    a.attr('data-name', animals[i]);
    a.text(animals[i]);
    $('#animalView').append(a);
}

}

function startStop(){
    var state = $(this).attr('data-state');
         console.log(state);
                if (state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
    }



$('#addAnimal').on('click', function(){

  var giphy2 = $('#animal-input').val().trim(); 
  
  animals.push(giphy2);

  renderButtons();

  return false;

})

$(document).on('click', '.aniBtn', displayGiphy);
$(document).on('click', '.stateGif', startStop);


renderButtons();

})





