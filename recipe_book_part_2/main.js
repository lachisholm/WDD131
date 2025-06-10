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


//3 create template function
function tagsTemplate(tags) {
    //loop
    return tags.map(tag => <li>${tag}</li>).join('');
}

function ratingTemplate(rating) {
    //begin building an html string using the ratings html 
    let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
    >`;



    