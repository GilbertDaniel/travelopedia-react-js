import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const URL_LIST_CORRDS = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';
const options = {
    params: {
        // bl_latitude: '11.847676',
        // tr_latitude: '12.838442',
        // bl_longitude: '109.095887',
        // tr_longitude: '109.149359',
        latitude: '52.520007',
        longitude: '13.404954',
    },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'c5eef63db3msh4d54fecd31437c6p14bd29jsnd0fecaa4d73e'
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
                'X-RapidAPI-Key': 'c5eef63db3msh4d54fecd31437c6p14bd29jsnd0fecaa4d73e',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }

}


export const getPlacesDataByLatLng = async (lat,lng) => {

    try {
        const { data: { data } } = await axios.get(URL_LIST_CORRDS, {
            params: {
                latitude: lat,
                longitude: lng,
            },
            headers: {
                'X-RapidAPI-Key': 'c5eef63db3msh4d54fecd31437c6p14bd29jsnd0fecaa4d73e',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }

}