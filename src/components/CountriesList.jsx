import React from "react";
import { Link } from "react-router-dom";
import countriesJSON from "../countries.json";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";



//create a function that will return a list of countries which will render Country Details on the same view when clicked

// The alpha3Code of the country will be available throught the URL parameters. To access the URL parameters, from the browser's URL bar, use the React Routers hooks useParams. For a reminder on setting up and accessing the URL TO LOWERCASE parameters with React Router

function CountriesList() {
    const [countries, setCountries] = useState(countriesJSON);
    const {id} = useParams();
    const [country, setCountry] = useState("");

    useEffect(() => {
        const filteredCountry = countries.filter((country) => {
            return country.alpha3Code === id;
        });
        setCountry(filteredCountry[0]);
    }, [id]);

    return (
        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
            <div className="list-group">
                {countries.map((country) => {
                    return (
                        <Link
                            className="list-group-item list-group-item-action"
                            to={`/${country.alpha3Code}`}
                        >
                            <img
                                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                                alt="flag"
                                style={{ width: "30px" }}
                            />
                            {country.name.common}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default CountriesList;
    