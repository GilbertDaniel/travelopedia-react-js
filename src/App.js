import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlacesData, getPlacesDataByLatLng } from './api/index';


const App = () => {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const [isLoading, setIsLoading] = useState(false);

  console.log(coordinates);

  // const places = [
  //   { name: 'Cool Place1' },
  //   { name: 'Cool Place2' },
  //   { name: 'Cool Place3' },
  //   { name: 'Cool Place4' },
  //   { name: 'Cool Place5' },
  //   { name: 'Cool Place6' },
  //   { name: 'Cool Place7' },
  //   { name: 'Cool Place8' },
  //   { name: 'Cool Place9' },
  //   { name: 'Cool Place10' },
  //   { name: 'Cool Place11' },
  //   { name: 'Cool Place12' },
  //   { name: 'Cool Place13' },
  //   { name: 'Cool Place14' },
  //   { name: 'Cool Place15' },
  //   { name: 'Cool Place16' },
  //   { name: 'Cool Place17' },
  //   { name: 'Cool Place18' },
  //   { name: 'Cool Place19' },
  //   { name: 'Cool Place20' },
  //   { name: 'Cool Place21' },

  // ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);
  // useEffect(() => {
  //   if (bounds) {
  //     setIsLoading(true);
  //     getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
  //       setPlaces(data);
  //     })
  //   }
  // }, [type,coordinates,bounds])


  useEffect(() => {
    getPlacesDataByLatLng(type, coordinates.lat, coordinates.lng).then((data) => {
      setPlaces(data);
    })
  }, [type, coordinates])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={4} md={12}>
          <List
            isLoading={isLoading}
            places={places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App;