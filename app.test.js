const request = require('supertest');
const app = require('./app');

test('GET / devuelve mensaje', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Esta es una prueba sencilla.');
});
