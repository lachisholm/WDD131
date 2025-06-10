// main.js
import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Main JS loaded');
        const listContainer = document.querySelector('.recipes-list');


        recipes.forEach(recipe => {
            const card = document.createElement('article');
            card.classList.add('recipe-card');

            card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p class="description">${recipe.description}</p>
            
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5-recipe.rating)}
            </span>
            <a href="#" class="view-recipe">View Recipe</a>
            `;

            listContainer.appendChild(card);
        });
    });
