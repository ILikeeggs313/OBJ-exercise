//Objects enhancement exercise
function createInstructor(firstName, lastName){
    return{
        firstName,
        lasName
    };
}

//computed property names ES2015
const favoriteNumber = 42;
const instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite!'
};
//Object Methods ES2015
const instructor1 = {
    firstName: 'Colt',
    sayHi(){
        return 'Hi';
    },
    sayBye(){
        return instructor1.firstName + "Say bye!";
    }
}
//createAnimal function
const d = createAnimal ('dog', 'bark', 'woof!');
d.bark();

const s = createAnimal('sheep', 'bleet', 'BAaaaaaa');
s.bleet();

function createAnimal(species, doSth, sound){
    return{ species,
    [doSth](){
        return sound;
    }
}
}