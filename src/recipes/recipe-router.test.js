const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /recipe', () => {
    it('should return an recipe/s page', () => {
        return supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).to.be.an('array');
        });
    })
  }); 

  describe('GET /recipe', () => {
    it('should return an recipe/s page', () => {
        return supertest(app)
        .get('/:id')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).to.be.an('array');
        });
    })
  }); 

describe('POST /recipe', () => {
    it('should post a recipe', () => {
        return supertest(app)
        .post('/')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).to.be.an('object');
        });
    })
})


describe('PUT /recipe', () => {
    it('should return an recipe/s page', () => {
        return supertest(app)
        .put('/:id')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).to.be.an('array');
        });
    })
})