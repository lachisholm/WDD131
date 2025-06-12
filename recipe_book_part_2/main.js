// This in steps - my note//

//1 import
import recipes from './recipes.mjs';

//2 build random functions
function random(num){
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength =list.length;
    const randomNum = random(listLength)
    return list[randomNum];
}


//3 create template function
function tagsTemplate(tags) {
    //loop
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    //begin building an html string using the ratings html 
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
 
// our rating out of 5 so use a for loop here

    for (let i=1; i<=5; i++) {
        //check to see if the current index of the loop is less than our rating
        if(i <= rating) {
            // if so then output a filled star
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            //empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

// closing tag to string
html += `</span>`;
//return the html string
return html;
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}"/>
        <figcaption>
        <ul class="recipe_tags">
        ${tagsTemplate(recipe.tags)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
        
        <p class="recipe_ratings">
            ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe_description">
            ${recipe.description}
        </p>
    </figcaption>
</figure>`;
}


//4 render the random recipe

function renderRecipes(recipeList) {
    // get the element 
    const recipesContainer = document.getElementById('recipesContainer');

    // Check if no recipes found
    if (recipeList.length ===0) {
        recipesContainer.innerHTML = `<div class="no-results">No recipes found.  Try a different seach term!</div>`;
        return;
    }

    // use the recipeTempate function to transform recipe objects into recipe thml strings

    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');

   //Set the HTML strings as the innerHTML of our output element.
    recipesContainer.innerHTML = recipeHTML;
    }

    function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes);
    // render the recipe with renderRecipes:
    renderRecipes([recipe]);
    }

    // Step 5: Filtering Recipes
    function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        //Check if the search term show up in the name
        const nameMatch = recipe.name.toLowerCase().includes(query);

        //Check if the search term show up in the description
        const descMatch = recipe.description.toLowerCase().includes(query);

        //Check if the search term shows up in the tag list
        const tagMatch = recipe.tags.find(tag => tag.toLowerCase().includes(query));

        //Check if the search term shows up in the ingredients list
        const ingredientMatch = recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(query));

        //Return true if any of the above match
        return nameMatch || descMatch || tagMatch || ingredientMatch;

});

//Sort the List of recipes by name alphabetically
const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
return sorted;
    }

    function searchHandler(e) {
    e.preventDefault();

    //get the search input
    const searchInput = document.getElementById('searchInput');

    //Convert the value in the input to Lowercase
    const query = searchInput.value.toLowerCase().trim();

    // If search is empty, show random recipe
    if (query ==='') {
    init()
    return;
}

// use the filter function to filter our recipes
const filteredRecipes = filterRecipes(query);

// render the filtered list
renderRecipes(filteredRecipes);
    }
    function showRandomRecipe() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

//Event Listeners
document.getElementById('searchButton').addEventListener('click', searchHandler);
document.getElementById('randomButton').addEventListener('click', showRandomRecipe);

//Allow search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
if (e.key ==='Enter'){
searchHandler(e);
    }
});

//Initialize the page when it loads 
init();










