import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.modules.css';



const Cards = ({ data: { global_deaths, global_recovered, global_total_cases, update_date_time } }) => {


    if (!global_deaths) {
        return 'Loading...';
    }



    return (
        <div className={styles.container}>

            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><CountUp start={0} end={global_total_cases} duration={2.0} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(update_date_time).toDateString()}</Typography>
                        <Typography variant="body2">No. of Active Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={global_recovered} duration={2.0} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(update_date_time).toDateString()}</Typography>
                        <Typography variant="body2">No. of Recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={global_deaths} duration={2.0} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(update_date_time).toDateString()}</Typography>
                        <Typography variant="body2">No. of Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>


        </div>
    )


}
export default Cards;





