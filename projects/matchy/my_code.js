
var animal = {};
animal.species = "Lion";
animal["name"] = "Shaggy";
animal.noises = [];
//console.log(animal);

////////
var noises = [];
noises["noises"] = "Rawr";
noises.push("Meow");
noises.unshift("RAWWWRRR");
noises[noises.length] =  "Rawrrrrrrr";
//console.log(noises);

// step 3
animal.prop = noises;
noises.push("Meowwww");
console.log(animal);