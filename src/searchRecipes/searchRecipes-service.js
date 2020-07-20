const searchRecipesService = {
    getByRecipename(knex, recipename) {
        console.log(recipename)
        return knex 
            .from('recipes')
            .select('*')
            .where('recipename', 'ILIKE', recipename)
    },

    getByIngredients(knex, ingredients) {
        return knex
            .from('recipes')
            .select('*')
            .where('ingredients', ingredients);
    },

    searchRecipes(knex, recipename=null, ingredients=null){
        console.log('recipename', recipename);
        console.log('ingredients', ingredients);

        let results = knex
            .from('recipes')
            .select('*').where('status', 'published')
        if(recipename != null) results = results.where('recipename', 'ILIKE', `$%{recipename}%`);
        if(ingredients != null) results = results.where('ingredients', 'ILIKE', `$%{ingredients}%`);
        return results;
    },
}

module.exports = searchRecipesService;