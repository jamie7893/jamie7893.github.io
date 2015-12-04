$(document).ready(function(){
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

$(addAvengers(avengers, "Captain America"));

  function createAvengersList(avengers) {
    var $ul = $('<ul>')
        .attr('id', 'avengers-list')
        .attr('class', 'avengerlist')
        .append(_.map(avengers, function(avenger){
            return $('<li>').html(avenger)
              .attr('id', toDashCase(avenger))
              .html(avenger);
        }));
    return $ul;
  }

  $(createAvengersList(avengers)).appendTo('main');
 
var $avengerUL = $('#avengers-list');
var $avengerList = $avengerUL.children('li').get();
$avengerList.sort(function(a, b) {
   return $(a).text().localeCompare($(b).text());
});

$.each($avengerList, function(idx, item) { 
  $avengerUL.append(item); 
  
});

  var $btn1 = $('<button>')
        .text('Move Avenger')
        .addClass('success')
        .on('click', function() {
          $('ul.avengerlist').find('li').first().appendTo('ul.avengerlist');
        })
        .appendTo('body');
        
       var elements = $("ul#avengers-list  li");
        elements.hide();
        elements.each(function (i) {
            $(this).delay(2000 * i).fadeIn(200);
        });
});

function toDashCase(str) {
  return str.toLowerCase().replace(" ", "-");
}

function findAvengerItem(id) {
  return $('li#' + id);
}

function removeAvengers(avengers) {
  _.each(avengers, function(avenger){
  var $found = findAvengerItem(toDashCase(avenger));
    if ($found[0]) $found.remove();
  });
}

function addAvengers(avengers, str) {
  avengers.push(str);
}