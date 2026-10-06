import test from 'node:test';
import assert from 'node:assert';
import app from './index.js';

test('GET / returns Hello CI/CD', async () => {
    const server = app.listen(0);

    const port = server.address().port;

    const response = await fetch(`http://localhost:${port}/`);
    const body = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(body.msg, 'Hello CI/CD');

    server.close();
});

test('GET / returns Hello CI/CD v2', async () => {
    const server = app.listen(0);

    const port = server.address().port;

    const response = await fetch(`http://localhost:${port}/`);
    const body = await response.json();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(body.msg, 'Hello CI/CD v2');

    server.close();
});