$(function () {
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  // ALL YOUR CODE BELOW HERE //
  
var allGuards = oldGuardians.concat(newGuardians);
var $names = _.pluck(allGuards, 'name');
var firstNames = _.map(allGuards, function(g){
    return g.name.split(" ")[0];

});

var groot = _.filter(allGuards, function(g){
   return g.name === 'groot';
});


////////////////////////////////////////////////////////// 
var createTable = function (guardians) {
      var createRow = function (guardian) {
          var $row = $("<tr>").css('border', '1px solid black');
          var $name = $("<td>").text(guardian.name).css('border', '1px solid black');
          var $notes = $("<td>").text(guardian.notes || "No Data Available");
          $row.append($name);
          $row.append($notes);
          return $row;
      };
      var $table = $("<table>").css('border', '1px solid black');
      guardians.sort(function(a, b){
          return a.name > b.name ? 1 : -1;
      });
      var $rows = guardians.map(createRow);
      $table.append($rows).attr('id', guardians);
      return $table;
  };
  $('body').append(createTable(allGuards));

var  oldGuards = $('body').append(createTable(oldGuardians));
var newGuards = $('body').append(createTable(newGuardians));

    var $btn1 = $('<button>')
        .text('Move Avenger')
        .addClass('success')
        .on('click', function() {
        $('table:eq(1), table:eq(2)').remove();
        $('body').append(createTable(allGuards));
          
        })
        .appendTo('body');
////////////////////////////////////////


  // ALL YOUR CODE ABOVE HERE //
});

function filterByname(name){
    name = name.toLowerCase();
    return function(g){
    return g.name === name; 
    };
}


