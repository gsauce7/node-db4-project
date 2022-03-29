const router = require('express').Router()
const Recipe = require('./recipes-model')

router.get('/:id', (req, res, next) => {
    Recipe.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})



module.exports = router;