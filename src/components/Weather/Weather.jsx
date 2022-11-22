import axios from "axios";

function Weather() {
    console.log('in weather API');

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: '44.986656, -93.258133'},
        headers: {
          'X-RapidAPI-Key': '3273b7edf9mshc429f4d5504c832p1551c6jsn30f25953ea58',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

}

export default Weather;