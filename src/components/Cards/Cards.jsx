import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.modules.css';


const Cards = ({ data: { global_deaths, global_recovered, global_total_cases } }) => {


    return (
        <div className={styles.container}>

            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{global_total_cases}</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">No. of Active Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{global_recovered}</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">No. of Recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">{global_deaths}</Typography>
                        <Typography color="textSecondary">Real Date</Typography>
                        <Typography variant="body2">No. of Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>


        </div>
    )


}
export default Cards;





