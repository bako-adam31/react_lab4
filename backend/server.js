const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_KEY = 'db3a671717a2346487382276a4376ee9';

app.get('/api/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) return res.status(400).json({ error: 'Adj meg egy várost!' });

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hu&appid=${API_KEY}`;
        const { data } = await axios.get(url);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Nem található a város vagy hiba történt.' });
    }
});

app.listen(3000, () => console.log('A backend fut a http://localhost:3000 címen!'));