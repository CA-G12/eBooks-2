const supertest = require('supertest');

const router = require('../src/router');

test('landing \\ route returns a status code of 200', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});
test('unknown route returns a status code of 404', (done) => {
  supertest(router)
    .get('/fjhfhh')
    .expect(400)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).toBe(400);
      expect(res.text).toBe('unknown uri');
      done();
    });
});
test('books route returns a status code of 200', (done) => {
  supertest(router)
    .get('/books')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).toBe(200);
      done();
    });
});
test('Home route returns a status code of 200', (done) => {
    supertest(router)
      .get('/public/HomePage/home.html')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
