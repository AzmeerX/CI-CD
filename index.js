import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.json({ msg: 'Hello CI/CD' });
});

app.get("/", (req, res) => {
    return res.json({ msg: 'Hello CI/CD v2' });
});

export default app;