// This in steps - my note//

//1 import
import recipes from './recipes.mjs';

//2 build random functions
function random(num){
    return Math.floor(Math.random() * numb);
}

function getRandomListEntry(list) {
    const listLength =list.length;
    const randomNum = random(listLength)
    return list[randomNum];
}


