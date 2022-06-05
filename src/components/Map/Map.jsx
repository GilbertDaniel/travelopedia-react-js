import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';
const Map = ({setCoordinates, setBounds, coordinates, places}) => {
    const isDeskTop = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    return (
        // Important! Always set the container height explicitly
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA1IflOa3odAfkQ_n58DRz7UDs1XojE4xY' }}
                defaultCenter={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                option={''}
                onChange={(e)=>{
                    setCoordinates({lat: e.center.lat, lng: e.center.lng})
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                }}
                onChildClick={''}
            >
                {places?.map((place,i) => (
                    <div
                     className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(places.longitude)}
                    key={i}
                    >
                        {
                            !isDeskTop ? (
                                <LocationOnOutlinedIcon
                                    color='primary'
                                    fontSize='large'
                                />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="sbtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}

            </GoogleMapReact>
        </div>
    );
}

export default Map;
