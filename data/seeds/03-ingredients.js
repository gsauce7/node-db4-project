exports.seed = function (knex) {
    return knex('ingredients').del()
        .then(function () {

            return knex('ingredients').insert([
                { ingredient_name: "Coffee Beans" },
                { ingredient_name: "Heavy Cream" },
                { ingredient_name: "Eggs" },
                { ingredient_name: "Butter" },
                { ingredient_name: "Salt" }
            ]);
        });
};

