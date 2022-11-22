import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
require('dotenv').config();

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
            url: '/weather'
        })
            .then(res => {
                console.log('response is', res);

                dispatch({
                    type: 'SET_WEATHER',
                    payload: res
                })

            })
            .catch(err => {
                console.error(err);
            })
    }, []);


    return (
        <>

            <div>

                <p>Weather</p>
                {/* <ul>
        <li>
        {random.data && random.data.map(item =>{
        <img src={item.images.downsized_medium.url} />
      })}
         </li>

      </ul> */}
            </div>
        </>
    );

    // const options = {
    //     method: 'GET',
    //     url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    //     params: {q: '44.986656, -93.258133'},
    //     headers: {
    //       'X-RapidAPI-Key': process.env.KEY,
    //       'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //     }
    //   };

    //   axios.request(options).then(function (response) {
    //       console.log(response.data);
    //   }).catch(function (error) {
    //       console.error(error);
    //   });

}

export default Weather;