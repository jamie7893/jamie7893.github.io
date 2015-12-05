$(document).ready(function() {
    // ALL YOUR CODE GOES BELOW HERE //
    $.getJSON('data/product.json', function(products) {
        createProduct(products);
        console.log(products);
    });

    // ALL YOUR CODE GOES ABOVE HERE //
    // Add the value of "Search..." to the input field and a class of .empty

    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });
});


function createProduct(products) {
    _.each(products, function(product, i) {
        $('<ul class = flex-container id="flex' + i + '">')
            .appendTo('main');
        $('<div class = flex-image id = "image' + i + '"></div>').appendTo('#flex' + i);
        $('<div  class= flex-item  id = "desc' + i + '"></div>').appendTo('#flex' + i);
        //$('<  class= flex-item  id = "desc' + i + '"></div>').appendTo('#desc' + i);

        var $desc = $('#desc' + i).prepend('<li style="list-style: none" class = flex-item id = description' + i + '">' + product.desc).fadeIn(1000);
        $desc.appendTo('#desc li' + i);

        var $color = $('#desc' + i).append('<li class = flex-item id = color' + i + '">' + "<b>Color: </b>" + product.color);
        $color.appendTo('#desc li' + i);

        var $price = $('#desc' + i).append('<li class = flex-item id = price' + i + '">' + "<b>Price:</b> $" + product.price);
        $price.appendTo('#desc li' + i);

        var $images = $('<div><img id="theImg' + i + '"src="img/product/thumbs/' + product.image + '"</img></div>');
        $images.appendTo('#image' + i);
    });
}