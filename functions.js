/**
 * Created by ryansouthard on 5/4/17.
 */


function roller() {
    return console.log(Math.ceil(6 * Math.random()));
};


firstDie = roller();
secondDie = roller();
console.log(parseInt(firstDie + secondDie));

