const db = require("../../data/db-config.js")

function getRecipeById(recipe_id) {
    return db("recipes as r")
        .select("r.*", "s.*", "ifrs.ingredient_quantity", "i.*")
        .where("r.recipe_id", recipe_id)
        .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
        .leftJoin("ingredients_for_recipe_steps as ifrs", "s.step_id", "ifrs.step_id")
        .leftJoin("ingredients as i", "i.ingredient_id", "ifrs.ingredient_id")
        .orderBy("s.step_number", "asc")
        .then(data => {
            if (!data || Object.keys(data).length === 0) {
                return []
            }
            let arr = []
            data.map(step => {

                if (!step.recipe_id) {
                    return arr
                }
                let exists = false
                arr.map(steps => {
                    if (steps.step_id == step.step_id) {
                        exists = true
                        if (step.ingredient_quantity) {
                            let ingredient = {
                                ingredient_id: step.ingredient_id,
                                ingredient_name: step.ingredient_name,
                                ingredient_quantity: step.ingredient_quantity
                            }
                            return steps.ingredients.push(ingredient)
                        }
                        else {
                            return steps
                        }
                    }
                    return steps
                })
                if (!exists) {
                    let newStep = {
                        step_id: step.step_id,
                        step_number: step.step_number,
                        step_instructions: step.step_instructions
                    }
                    if (step.quantity) {
                        newStep.ingredients = []
                        let ingredient = {
                            ingredient_id: step.ingredient_id,
                            ingredient_name: step.ingredient_name,
                            ingredient_quantity: step.ingredient_quantity
                        }
                        newStep.ingredients.push(ingredient)

                    } else {
                        newStep.ingredients = []
                    }
                    arr.push(newStep)
                }
            })
            let finalResult = {
                recipe_id: data[0].recipe_id,
                recipe_name: data[0].recipe_name,
                steps: arr
            }
            return finalResult
        })
}

module.exports = { getRecipeById }