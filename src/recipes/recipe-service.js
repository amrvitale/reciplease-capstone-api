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

    getById(knex, id) {
        return knex
            .from('recipes')
            .select('*')
            .where('id', id).first();
    },

    editRecipe(knex, id, newRecipe) {
        return knex('recipes')
        .where ( {id})
        .update(newRecipe)
    },

}

module.exports = recipeService;