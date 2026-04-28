const request = require('supertest');
const app = require('./app');

test('GET / devuelve mensaje', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Esta es una prueba sencilla.');
});

test('GET /suma devuelve la suma de a y b', async () => {
    const res = await request(app).get('/suma?a=5&b=3');
    expect(res.body.resultado).toBe(8);
});