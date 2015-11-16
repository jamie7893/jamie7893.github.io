
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
            var random = animals(Math.random() * animals.length);
            return random;
        }
    };
    
    
console.log(friends.randomAnimal);