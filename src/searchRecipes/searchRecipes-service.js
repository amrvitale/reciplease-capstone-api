const searchRecipesService = {
    getByRecipename(knex, recipename) {
        console.log(recipename, "recipename")
        return knex 
            .from('recipes')
            .select('*')
            .where('recipename', 'ILIKE', recipename)
    },

    getByIngredients(knex, ingredients) {
        return knex
            .from('recipes')
            .select('*')
            .where('ingredients', 'ILIKE', ingredients);
    },

    searchRecipes(knex, recipename=null, ingredients=null){
        console.log('recipename', recipename);
        console.log('ingredients', ingredients);

        let results = knex('recipes')
            .select('*')
            .where('status', 'published')
            .andWhere((db) => {
                if (recipename != null) {
                    db.where('recipename', 'ILIKE', `$%{recipename}%`);
                } 
              /*  if (ingredients != null){ 
                    db.orWhere('ingredients', 'ILIKE', `$%{ingredients}%`);
                }*/
            })
        return results;
    },
}


module.exports = searchRecipesService;