import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';
const Map = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();
    const coords = { lat: 0, lng: 0 }
    return (
        // Important! Always set the container height explicitly
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA1IflOa3odAfkQ_n58DRz7UDs1XojE4xY' }}
                defaultCenter={coords}
                defaultZoom={14}
                margin={[50,50,50,50]}
                option={''}
                onChange={''}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;
