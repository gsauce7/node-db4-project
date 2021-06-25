const express = require('express')
const Recipe = require('./recipes-model')

const router = express.Router();

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getByRecipeId(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})



module.exports = router;