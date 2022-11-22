import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";


function Weather() {
    console.log('in weather API');

    const dispatch = useDispatch();


    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/mygarden/weather'
        })
            .then(response => {
                console.log('in .then of useeffect, response is', response);

                dispatch({
                    type: 'SET_WEATHER',
                    payload: response.data
                });

            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const weather = useSelector((store) => {
        return store.weather;
    })
    console.log('weather is', weather);

    
    return (
        <>
    <div className="weather">
    
        {weather.temperature}°F 
        <img src={weather.icon}/>
        {weather.text}
        Wind {weather.windMph} mph
    </div>
        </>
    );
      
}

export default Weather;