$(document).ready(function() {
    /*global _*/
    $.getJSON('data/product.json', function(products) {
        drawItems(products);
        filterBtn(products);
    });
    

});

function drawItems(products) {
    $('#product-list').append(makeProdList(products));
    $('input', '#form-search').on('keyup', function(event) {
        var term = event.target.value;
        var productList = $('#product-list');
        productList.empty();
        var filteredList = search(products, term);
        productList.append(makeProdList((filteredList)));

    });

}

function theImg(url) {
    return $('<div class = flex-image>').append($('<img>').attr('src', url));

}

function makeDetails(desc, price, stock, type, specs) {
    var container = $('<div>');
    container.append($('<div>').addClass('desc').html(desc)).append($('<div>').addClass('price').html(price)).append($('<div>').addClass('stock').html(stock)).append($('<div>').addClass('type').html(type));
    return container;

}

function search(collection, target) {
    return _.reduce(collection, function(results, value) {
        if (isComplex(value)) {
            if (search(value, target).length) {
                results.push(value);

            }

        }
        else if (typeof value === 'string') {
            if (value.toLowerCase().indexOf(target.toLowerCase()) > -1) {
                results.push(value);

            }

        }
        return results;

    }, []);

}



function isComplex(value) {
    if (Array.isArray(value)) return true;
    if (typeof value === 'object' && value !== null && value instanceof Date === false) return true;
    return false;

}

function makeProdList(products) {
    return $.map(products, function(product) {
        return $('<li>').attr('id', product.id).data('product', product).addClass('product-row').append(theImg("img/product/thumbs/" + product.image)).append(makeDetails('<u>' + product.desc + '</u>', '<b>Price: </b>' + '$' + product.price, '<b>In stock: </b>' + product.stock, product.type.charAt(0).toUpperCase() + product.type.substr(1)));

    });

}

function filterBtn(products) {
    _.map(_.uniq(_.pluck(products, 'type')), function(types) {
        $('#myDropdown').append(
            $('<a>').attr('href', '#').html(types.charAt(0).toUpperCase() + types.slice(1)).on('click', function() {
                _.map(products, function(product) {
                    if (product.type !== types) {
                        return $('#' + product.id).hide();

                    }
                    return $('#' + product.id).show();

                });

            })
        );

    });

}



