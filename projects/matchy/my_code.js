
var animal = {};
animal.species = "Lion";
animal["name"] = "Shaggy";
animal.noises = [];


////////
var noises = [];
noises["noises"] = "Rawr";
noises.push("Meow");
noises.unshift("RAWWWRRR");
noises[noises.length] =  "Rawrrrrrrr";


// step 3
animal.noises = noises;
noises.push("Meowwww");



//step 6

var animals = [];
animals.push(animal);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
var cat = { species: 'cat', name: 'Kitty Cat', noises: ['meoww', 'meow', 'sneeze', 'puuur'] };
var dog = { species: 'dog', name: 'Timmy', noises: ['ruff', 'barkk', 'sneeze', 'growll'] };
animals.push(cat);
animals.push(dog);


// I used a object because you it groups infomation together better. A Array is just a ordered pair
var friends = {
        randomAnimal: function() {
            var random = animals[Math.floor(Math.random() * (1 + animals.length - 1))];
            return random;
        }
    };
    
friends["name"] = friends.randomAnimal();

function search(toSearch) {
  for(var i = 0; i < animals.length; i++) {
    for(var key in animals[i]) {
      if(animals[i][key].indexOf(toSearch) !== -1) {
        return animals[i];
      } 
    } 
  }
  return "Name does not exist";
}

function edit(name, object) {
  for(var i = 0; i < animals.length; i++) {
    for(var key in animals[i]) {
      if(animals[i][key].indexOf(name) !== -1) {
        return animals[i];
      } 
    } 
  }
  return "Name does not exist";
}

function edit(name, object) {
  for(var i = 0; i < animals.length; i++) {
    for(var key in animals[i]) {
      if(animals[i][key].indexOf(name) !== -1) {
        animals[i] = object;
        return animals[i];
      } 
    } 
  }
  return "Name does not exist";
}

function remove(name) {
  for(var i = 0; i < animals.length; i++) {
    for(var key in animals[i]) {
      if(animals[i][key].indexOf(name) !== -1) {
        animals.splice(i, 1);
        return animals;
      } 
    } 
  }
  return "Name does not exist";
}

function create(object) {
  if (object.name.length > 0  && object.species.length > 0) {
  var i = animals.length;
    while(i--) {
      if(animals[i].name === object.name) {
        return "This name already exist";
      }
    }
  animals.push(object);
  return animals;
  }
  return  "You must enter a name and a species property";
}







