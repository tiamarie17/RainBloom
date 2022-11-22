import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";


function Weather() {
    console.log('in weather API');

    const dispatch = useDispatch();

    const weather = useSelector((store) => {
        return store.weather;
    })
    console.log('weather is', weather);


    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/mygarden/weather'
        })
            .then(response => {
                console.log('response is', response);

                dispatch({
                    type: 'SET_WEATHER',
                    payload: response
                })

            })
            .catch(err => {
                console.error(err);
            })
    }, []);


    return (
        <>
        
            
            {weather.data.temperature}   
            {weather.data.text}
            <img src={weather.data.icon}/>
            {weather.data.windMph}
            
            
        </>
    );

}

export default Weather;