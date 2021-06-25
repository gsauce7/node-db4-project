// const db = require('../../data/db-config');

// async function getRecipes() {
//     let tags = await db('recipes')
//         .where({ 'recipes.user_id': userId })
//         .join('tags', 'tags.recipe_id', 'recipes.id')
//         .select('tags.tag as tags', 'tags.recipe_id');

//     let recipes = await db('recipes')
//         .where({ 'recipes.user_id': userId })
//         .select('recipes.*')


//     await recipes.forEach(recipe => {
//         recipe.tags = [];
//         tags.forEach(tag => {
//             if (recipe.id === tag.recipe_id) {
//                 console.log(tag)
//                 recipe.tags.push(tag.tags);
//             } else {
//                 return false;
//             }
//         });
//     });

//     return recipes;
// };

// function getAnimals() { // INCLUDING SPECIES NAME
//     return db('animals as a')
//         .leftJoin('species as s', 's.species_id', 'a.species_id')
//         .select('a.animal_id', 'a.animal_name', 's.species_name');
// }

// async function createAnimal(animal) {
//     const [animal_id] = await db('animals').insert(animal);
//     return getAnimals().where({ animal_id }).first();
// }

// function deleteRecipes(species_id) {
//     return db('species').where({ species_id }).del();
// }



// module.exports = {
//     getRecipes,
//     getRecipeById,
//     addRecipe,
//     deleteRecipe,
//     updateRecipe
// };



// async function getRecipeById(recipeId, userId) {
//     const recipe = await db('recipes')
//         .where({ 'recipes.id': recipeId, 'recipes.user_id': userId })
//         .first();

//     if (recipe) {
//         const ingredients = await db('ingredients')
//             .join('recipes', 'recipes.id', 'ingredients.recipe_id')
//             .select('ingredients.name')
//             .where({ 'ingredients.recipe_id': recipeId })
//             .map(ingredient => {
//                 return ingredient.name;
//             });

//         const instructions = await db('instructions')
//             .join('recipes', 'recipes.id', 'instructions.recipe_id')
//             .select('instructions.name')
//             .where({ 'instructions.recipe_id': recipeId })
//             .map(instruction => {
//                 return instruction.name;
//             });

//         const tags = await db('tags')
//             .join('recipes', 'recipes.id', 'tags.recipe_id')
//             .select('tags.tag')
//             .where({ 'tags.recipe_id': recipeId })
//             .map(tag => {
//                 return tag.tag;
//             });

//         const result = { ...recipe, ingredients, instructions }
//         return result;
//     } else {
//         return null;
//     }
// };




