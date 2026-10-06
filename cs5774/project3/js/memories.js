$(document).ready(function(){

    // search through memories functionality
    $('form#memory-search').on('submit', function(event) {
        event.preventDefault();

        // grab the search query
        var query = $('form#memory-search input#memory-query').val()
        // console.log(query);

        $("#memories .item").hide();

        // look through all the memory items
        // and find the ones that include the query in the title
        let items = $('#memories .item').filter(function() {
            // using to lowercase to prevent case sensitivity
            return $(this).find("p.title").text().toLowerCase().includes(query.toLowerCase())
        })

        if (items.length == 0) {
            $(".no-memories").css('display', 'block');
            $("#scroll-left, #scroll-right").css('display', 'none');
        } else {
            items.show();
        }

    });

    // switching view mode functionality a little bit

    // open the view modal
    $('.item button').on('click', function() {
        $('.modal-background').addClass("open");
    });

    // close the view modal
    $('#close-button').on('click', function() {
        $('.modal-background').removeClass("open");
    });
});
