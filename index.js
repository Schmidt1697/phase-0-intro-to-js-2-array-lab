// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = function(){
    
    return cats.push('Ralph')

};

const destructivelyPrependCat = function(){
    return cats.unshift('Bob');
}

const destructivelyRemoveLastCat = function(){
    return cats.pop();
}

const destructivelyRemoveFirstCat = function(){
    return cats.shift();
}

const appendCat = function(){
    const newCats = [...cats, 'Broom'];
    return newCats;
}

const prependCat = function(){
    const newCats = ['Arnold', ...cats];
    return newCats;
}

const removeLastCat = function(){
    return cats.slice(0,2)
}
const removeFirstCat = function(){
    return cats.slice(1, cats.length);
}
