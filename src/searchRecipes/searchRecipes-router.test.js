const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /search', () => {
    it('should return an array of recipes', () => {
        return supertest(app)
        .get('/search')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(res => {
            expect(res.body).to.be.an('array');
        });
    })
  });