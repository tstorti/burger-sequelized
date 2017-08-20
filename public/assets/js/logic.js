
//changes devoured status of selected burger
$(document).on("click", ".js-eat-burger", function(){

    //run a post call to change burger to "devoured" in database, update display
    var currentURL = window.location.origin;
    var burgerID = {"id": $(this).attr("data-id")};

    //update devoured status to true for that burger
    $.post(currentURL + "/devour", burgerID, function(response){
        
        // success: reload the page with added burger data
        if (response.result == 'redirect') {
            //redirecting to main page from here.
            window.location.replace(response.url);
        }
    });


});

//runs a post request to add new burger based on user-inputted name
$(document).on("click", "#add-burger", function(){
    var currentURL = window.location.origin;
    var newBurger = {"name":$("#new-burger").val()};

    //add new burger to the mysql database
    $.post(currentURL + "/add", newBurger, function(response){
        
        // success: reload the page with added burger data
        if (response.result == 'redirect') {
            //redirecting to main page from here.
            window.location.replace(response.url);
        }
    });
    
});