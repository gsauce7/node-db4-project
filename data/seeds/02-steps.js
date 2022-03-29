exports.seed = function (knex) {
    return knex('steps').del()
        .then(function () {
            return knex('steps').insert([

                { recipe_id: 1, step_number: 1, step_instructions: "Grind coffee beans" },
                { recipe_id: 1, step_number: 2, step_instructions: "Make espresso coffee" },
                { recipe_id: 1, step_number: 3, step_instructions: "Whip heavy cream" },
                { recipe_id: 1, step_number: 4, step_instructions: "Place whipped cream on top of espresso and enjoy" },
                { recipe_id: 2, step_number: 1, step_instructions: "Add butter to skillet and place on medium heat" },
                { recipe_id: 2, step_number: 2, step_instructions: "Crack eggs into bowl and stir" },
                { recipe_id: 2, step_number: 3, step_instructions: "Add salt to eggs" },
                { recipe_id: 2, step_number: 4, step_instructions: "beat eggs well and pour into medium heat skillet" },
                { recipe_id: 2, step_number: 5, step_instructions: "With flat wooden tool, slowly draw eggs to center until done" }

            ]);
        });
};