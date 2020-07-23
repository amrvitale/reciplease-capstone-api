const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../src/app');
const chai = require('chai');
const knex = require('knex');

const { DATABASE_URL } = require('../src/config')

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
});

app.set('db', db);

describe('GET endpoint - Welcome', () => {
    it('GET / responds with 200', () => {
      return supertest(app)
        .get('/api/')
        .expect(200);
    });
  });

  describe('GET endpoint - My Kitchen', () => {
    it('GET / responds with 200', () => {
        return supertest(app)
        .get('/api/mykitchen')
        .expect(200)
    })
  }); 

  describe('GET endpoint - My Recipes', () => {
    it('GET / responds with 200', () => {
        return supertest(app)
        .get('/api/myrecipes')
        .expect(200)   
    })
  }); 

  describe('GET endpoint - Search', () => {
    it('GET / responds with 200', () => {
        return supertest(app)
        .get('/api/search')
        .expect(200)   
    })
  }); 

describe('GET endpoint - Post Recipe page', () => {
    it('GET / responds with 200', () => {
        return supertest(app)
        .get('/api/postrecipe')
        .expect(200)
    })
})

describe('POST endpoint - recipe', () => {
    it('should post a recipe', () => {
        return supertest(app)
        .post('/api/myrecipes')
        .send({cooktime: "1 hour", directions: "1) In a large skillet cook the ground beef and garlic breaking it into crumbles over medium heat until no longer pink.↵↵2)In a small bowl whisk brown sugar, soy sauce, sesame oil, ginger, red pepper flakes and pepper. Pour over the ground beef and let simmer for another minute or two.↵↵3) Serve over hot rice and garnish with green onions and sesame seeds.", experience: "This right here is my boys favorite weeknight meal. They beg me to make it every week. Since we have been so busy with Lacrosse we have been having it every week. It requires minimal ingredients and requires little effort to make.", ingredients: "Bulgogi↵Green onions", preptime: "20 minutes", recipename: "Korean Ground Beef Rice Bowl", servings: "4"})
        .expect(201)
        });
    })

describe('PUT endpoint - recipe', () => {
    it('should edit a recipe', () => {
        return supertest(app)
        .put('/api/myrecipes/1')
        .expect(204)
        .send({cooktime: "2 hours", directions: "1) In a large skillet cook the ground beef and garlic breaking it into crumbles over medium heat until no longer pink.↵↵2)In a small bowl whisk brown sugar, soy sauce, sesame oil, ginger, red pepper flakes and pepper. Pour over the ground beef and let simmer for another minute or two.↵↵3) Serve over hot rice and garnish with green onions and sesame seeds.", experience: "This right here is my boys favorite weeknight meal. They beg me to make it every week. Since we have been so busy with Lacrosse we have been having it every week. It requires minimal ingredients and requires little effort to make.", ingredients: "Bulgogi↵Green onions", preptime: "20 minutes", recipename: "Korean Ground Beef Rice Bowl", servings: "4"})
    })
})