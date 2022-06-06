import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const URL_LIST_CORRDS = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';
const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng',
    params: {
      latitude: '12.91285',
      longitude: '100.87808'
    },
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': '0d5eb77314msh4a89796e2dfdbccp1f4cb8jsn82582a40c448'
    }
  };

// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });

export const getPlacesData = async (type, sw, ne) => {

    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
            },
            headers: {
                'X-RapidAPI-Key': '0d5eb77314msh4a89796e2dfdbccp1f4cb8jsn82582a40c448',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }

}


export const getPlacesDataByLatLng = async (type, lat,lng) => {

    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`, {
            params: {
                latitude: lat,
                longitude: lng
              },
              headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '0d5eb77314msh4a89796e2dfdbccp1f4cb8jsn82582a40c448'
              }
        });

        return data;
    } catch (error) {
        console.log(error);
    }

}