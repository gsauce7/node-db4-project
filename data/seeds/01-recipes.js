exports.seed = function (knex, Promise) {
    return knex('recipes').insert([
        { recipe name: 'Wellington Surprise', address: "2920 Zoo Dr, San Diego, CA 92101" },
        { recipe name: 'Granola', address: "Government Dr, St. Louis, MO 63110" }
    ]);
};
