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
                    payload: response
                })

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
    
            {weather.data[0].temperature}   
            {weather.data[0].text}
            <img src={weather.data[0].icon}/>
            {weather.data[0].windMph}
            
        </>
    );

}

export default Weather;