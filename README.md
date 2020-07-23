Welcome to Reciplease, my second capstone for the Bloc/Thinkful Web Developer program! 
====================================================================================

Link to the live Reciplease application: https://reciplease-capstone.amrvitale.now.sh/

Summary
--------
Reciplease is a recipe application. Users can add and edit recipes, and then publish them to the Reciplease database.
Once a recipe is published, it is available to the search component.
Recipe lovers can search by recipe name or by ingredients.

Technology Used
---------------
Client: React.js, vanilla CSS 
API: Node.js, Express.js

Reciplease Application Screenshots
----------------------------------
![Welcome page](https://raw.githubusercontent.com/amrvitale/reciplease-capstone/master/readmeImages/welcomepagescreenshot.PNG)
![My Kitchen](https://raw.githubusercontent.com/amrvitale/reciplease-capstone/master/readmeImages/mykitchenscreenshot.PNG)
![Post Recipe page](https://raw.githubusercontent.com/amrvitale/reciplease-capstone/master/readmeImages/postrecipepagescreenshot.PNG)
![View My Recipes](https://raw.githubusercontent.com/amrvitale/reciplease-capstone/master/readmeImages/viewmyrecipesscreenshot.PNG)
![Search page](https://raw.githubusercontent.com/amrvitale/reciplease-capstone/master/readmeImages/searchrecipescreenshot.PNG)
![Published recipe](https://raw.githubusercontent.com/amrvitale/reciplease-capstone/master/readmeImages/publishedrecipescreenshot.PNG)

Express Boilerplate
-------------------
This is a boilerplate project used for starting new projects!

How do set up?
--------------
Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine git clone BOILERPLATE-URL NEW-PROJECTS-NAME
2. cd into the cloned repository
3. Make a fresh start of the git history for this project with rm -rf .git && git init
4. Install the node dependencies npm install
5. Move the example Environment file to .env that will be ignored by git and read by the express server mv example.env .env
6. Edit the contents of the package.json to use NEW-PROJECT-NAME instead of "name": "express-boilerplate",

Scripts
-------
Start the application npm start

Start nodemon for the application npm run dev

Run the tests in watch mode npm test

Deploying
---------
When your new project is ready for deployment, add a new heroku application with heroku create. This will make a new git remote called "heroku" and you can then npm run deploy which will push to this remote's master branch.