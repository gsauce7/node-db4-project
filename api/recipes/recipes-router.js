// const router = require('express').Router();
// const Recipe = require('./recipes-model.js');

// router.get('/', (req, res) => {
//     console.log(req.user);
//     const userId = req.user.id;

//     Recipe
//         .getRecipes()
//         .then(recipes => {
//             res.status(200).json({ recipes });
//         })
//         .catch(err => {
//             res.status(500).json({ message: 'Could not retrieve recipes.' })
//         });
// });

// router.get('/:id', (req, res) => {
//     const recipeId = req.params.recipe_id

//     Recipe
//         .getRecipeById(recipe_id)
//         .then(recipe => {
//             if (!recipe) {
//                 res.status(404).json({ message: 'No recipe found with this ID for current user.' })
//             } else {
//                 res.status(200).json({ recipe });
//             };
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({ err })
//         });
// });


// module.exports = router;