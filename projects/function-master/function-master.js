function objectValues(obj){
    var keys = Object.keys(obj);
    var vals = [];
    for (var i = 0; i < keys.length; i++) {
        var currentKey = keys[i];
        var currentVal = obj[currentKey];
        vals.push(currentVal);
    }
    
    return vals;
}


function keysToString(obj){
    var keys = Object.keys(obj);
    var vals = [];
    for (var i = 0; i < keys.length; i++) {
        var currentKey = keys[i];
        var currentVal = obj[currentKey];
        vals.push(currentVal);
        var joinKeys = keys.join(" ");
    }
    return joinKeys;
}

function valuesToString(obj){
    var keys = Object.keys(obj);
    var vals = [];
    for (var i = 0; i < keys.length; i++) {
        var currentKey = keys[i];
        var currentVal = obj[currentKey];
        vals.push(currentVal);
        var joinVals = vals.join(" ");
    }
    return joinVals;
}

function arrayOrObject(group){
    if (Array.isArray(group)) {
        return "array";
    }   else if(typeof group === 'object') {
            return "object";
        }
}

function capitalizeWord(string) {
    var letters = string.split("");
    letters[0] = letters[0].toUpperCase();
    return letters.join("");
}

function capitalizeAllWords(string) {
    var pieces = string.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}

function welcomeMessage(object) {
    var name = object.name;
    var letters = name.split("");
    letters[0] = letters[0].toUpperCase();
    var name2 = letters.join("");
    return "Welcome " + name2 + "!";
}

function profileInfo(object) {
    var name = object.name;
    var letters = name.split("");
    letters[0] = letters[0].toUpperCase();
    var name2 = letters.join("");
    var species = object.species;
    var name3 = object.species;
    var letters2 = name3.split("");
    letters2[0] = letters2[0].toUpperCase();
    var name4 = letters2.join("");
    return name2 + ' ' + "is a " + name4;
}

function maybeNoises(object){
  if (object.noises){
    var noises = object.noises;
    var string = noises.join(" ");
    if (string === ""){
      return "there are no noises";  
    }
    return string;
  } 
  return "there are no noises";
} 

function hasWord(words, word) {
    if (words.indexOf(word) !== -1) {
        return true;
    }   return false;
}   

function addFriend(name, object) {
    var friends = object.friends;
    friends.push(name);
    return object;
}

function isFriend(name, object) {
    if (object.friends){
        var friends = object.friends;
        var i = friends.length;
        while(i--) {
            if (name === friends[i]){
                return true;
            }
        }
    } return false;
}
function nonFriends(name, list) {
var nonfriends = [];
    for (var i = 0; i < list.length; i++) {
        var friends = list[i].friends;
        var isFriend = false;
        if (list[i].name !== name) {
            for (var e = 0; e < friends.length; e++) {
                if (friends[e] === name) {
                    isFriend = true;
                } 
            }
            if (!isFriend) nonfriends.push(list[i].name);
        } else {
            isFriend = true;
        }
    }
    return nonfriends;
};

function updateObject(object, key, value){
    for (var prop in object){
        if (prop !== key){
            object[key] = value;
        }
    } return object;
}






function removeProperties(object, strings) {
    var remove = [];
    var i  = strings.length;
    while(i--) {
        for (var key in object) {
            if(strings[i] === key) {
                delete object[key];
            }
        }
    }
}

function dedup(a){
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}
