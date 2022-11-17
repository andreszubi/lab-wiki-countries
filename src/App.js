import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJSON from './countries.json';
import { useState } from 'react';







function App() {
  const [countries, setCountries] = useState(countriesJSON);
  const [country, setCountry] = useState({});


  return (
    <div className="App">
    <Navbar />
  
    <div className="container">
      <div className="row">
        <CountriesList countries={countries} />
        {/* React-Router Route rendering the CountryDetails should go here */}
        <Routes>
          <Route path={`/:id`} element={<CountryDetails country={country} />} />
        </Routes>
      </div>
    </div>
  </div>

  );
}

export default App;
