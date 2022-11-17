import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";


// render country details on the same view when clicked on the country name using the alpha3Code of the country

function CountryDetails({countries}) {
    const { id } = useParams();
    const [country, setCountry] = useState("");

    

    useEffect(() => {
       const filteredCountry = countries.filter((country) => {
              return country.alpha3Code === id;
         });
            setCountry(filteredCountry[0]);
    }, [id]);

    return (
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.area} km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map((border) => {
                                    return (
                                        <li>
                                            <Link to={`/${border}`}>
                                                {border}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}




export default CountryDetails;
  