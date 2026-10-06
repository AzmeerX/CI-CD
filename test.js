import test from 'node:test';
import assert from 'node:assert';
import app from './index.js';

test('GET / returns Hello CI/CD', async () => {
    const server = app.listen(0);

    try {
        const port = server.address().port;

        const response = await fetch(`http://localhost:${port}/`, {
            headers: {
                connection: 'close'
            }
        });

        const body = await response.json();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(body.msg, 'Hello CI/CD');
    } finally {
        server.closeAllConnections();
        server.close();
    }
});