const recipeService = {
    getAllRecipes(knex) {
        return knex.select('*').from('recipes');
    },

    insertRecipe(knex, newRecipe) {
        return knex
            .insert(newRecipe)
            .into('recipes')
            .returning('*')
            .then(rows => rows[0]);
    },
}

module.exports = recipeService;