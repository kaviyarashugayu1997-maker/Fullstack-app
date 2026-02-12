const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let data = [{ id: 1, text: "Hello from the backend!" }];

app.get('/api/items', (req, res) => res.json(data));

app.post('/api/items', (req, res) => {
    const newItem = { id: Date.now(), text: req.body.text };
    data.push(newItem);
    res.status(201).json(newItem);
});

app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));