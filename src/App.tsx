import styles from "./App.module.css";
import Form from "./components/Form/Form";
import useWeather from "./hook/useWeather";
import WeatherDetail from "./components/WeatherDetail/WeatherDetail";
import Spinner from "./components/Spinner/Spinner";
import Alert from "./components/Alert/Alert";


function App() {
  const { weather, notFound,loading, fetchWeather, hasWeatherData } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Weather Search</h1>

      <div className={styles.container}>
        <Form 
        fetchWeather={fetchWeather}

        />

        {loading && <Spinner/>}
        {hasWeatherData && <WeatherDetail weather={weather}/>}
        {notFound && <Alert>City not found</Alert>}
       
          
          


      </div>
    </>
  );
}

export default App;
