import { useState } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await axios.get(`http://localhost:3000/api/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (err) {
      setError('Nem található ilyen város!');
    } finally {
      setLoading(false);
    }
  };

  return (
      <div style={{ maxWidth: '400px', margin: '3rem auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1>Időjárás</h1>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
          <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
              placeholder="Város neve"
              style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', flex: 1 }}
          />
          <button
              onClick={fetchWeather}
              disabled={loading}
              style={{ padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', backgroundColor: '#646cff', color: 'white', border: 'none' }}
          >
            {loading ? 'Keresés...' : 'Keresés'}
          </button>
        </div>

        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        <WeatherCard weatherData={weatherData} />
      </div>
  );
}


export default App;