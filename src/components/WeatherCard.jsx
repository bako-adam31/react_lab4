export default function WeatherCard({ weatherData }) {
    if (!weatherData) return null;

    return (
        <div style={{
            border: '1px solid #ddd', padding: '20px', borderRadius: '12px',
            marginTop: '20px', backgroundColor: '#fdfdfd', color: '#333',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <h2>{weatherData.name}, {weatherData.sys.country}</h2>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '10px 0' }}>
                {Math.round(weatherData.main.temp)} °C
            </div>
            <p><strong>Érzet:</strong> {Math.round(weatherData.main.feels_like)} °C</p>
            <p><strong>Páratartalom:</strong> {weatherData.main.humidity}%</p>
            <p style={{ textTransform: 'capitalize' }}>
                {weatherData.weather[0].description}
            </p>
        </div>
    );
}
