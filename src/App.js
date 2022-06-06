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
  const [filteredPlaces, SetFilterPlaces] = useState([])

  const [isLoading, setIsLoading] = useState(false);
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
      const filteredPlaces = places.filter((place) => place.rating > rating);
      SetFilterPlaces(filteredPlaces);
  }, [rating])

  useEffect(() => {
    getPlacesDataByLatLng(type, coordinates.lat, coordinates.lng).then((data) => {
      setPlaces(data);
      SetFilterPlaces([]);
    })
  }, [type, coordinates])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={12}>
          <List
            isLoading={isLoading}
            places={filteredPlaces.length ? filteredPlaces : places}
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