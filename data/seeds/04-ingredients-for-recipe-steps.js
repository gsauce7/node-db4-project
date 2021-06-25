exports.seed = function (knex) {
    return knex('ingredients_for_recipe_steps').del()
        .then(() => {
            return knex('ingredients_for_recipe_steps').insert([
                { step_id: 1, ingredient_id: 1, ingredient_quantity: 1, ingredient_quantity_unit: "cup" },
                { step_id: 3, ingredient_id: 2, ingredient_quantity: .25, ingredient_quantity_unit: "cup" },
                { step_id: 5, ingredient_id: 4, ingredient_quantity: 1, ingredient_quantity_unit: "tablespoon" },
                { step_id: 6, ingredient_id: 3, ingredient_quantity: 3, ingredient_quantity_unit: "egg" },
                { step_id: 7, ingredient_id: 5, ingredient_quantity: 1, ingredient_quantity_unit: "pinch" }

            ]);
        });
};

