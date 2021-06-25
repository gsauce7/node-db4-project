exports.seed = function (knex) {
    return knex('recipes').del()
        .then(() => {
            return knex('recipes').insert([
                { recipe_name: "Espresso with Whipped Cream" },
                { recipe_name: "Scrambled Eggs" }
            ]);
        });
}