import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './style.js';
import { Rating } from '@material-ui/lab/Rating';
import PlaceDetails from './../PlaceDetails/PlaceDetails';
const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState('')
    const places = [
        {name: 'Cool Place1'},
        {name: 'Cool Place2'},
        {name: 'Cool Place3'},
        {name: 'Cool Place4'},
        {name: 'Cool Place5'},
        {name: 'Cool Place6'},
        {name: 'Cool Place7'},
        {name: 'Cool Place8'},
        {name: 'Cool Place9'},
        {name: 'Cool Place10'},
        {name: 'Cool Place11'},
        {name: 'Cool Place12'},
        {name: 'Cool Place13'},
        {name: 'Cool Place14'},
        {name: 'Cool Place15'},
        {name: 'Cool Place16'},
        {name: 'Cool Place17'},
        {name: 'Cool Place18'},
        {name: 'Cool Place19'},
        {name: 'Cool Place20'},
        {name: 'Cool Place21'},

    ];
    return (
        <div className={classes.container}>
            <Typography variant='h6'>
                Restaurants, Hotels & Attractions Around You!!!!
            </Typography>
            <FormControl className={classes.FormControl}>
                <InputLabel id="type">Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)} className={classes.selwidth}>
                    <MenuItem value="restaurant">Restaurant</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.FormControl}>
                <InputLabel id="rating">Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)} className={classes.selwidth}>
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="3">Above 3.0</MenuItem>
                    <MenuItem value="4">Above 4.0</MenuItem>
                    <MenuItem value="4.5">Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List
