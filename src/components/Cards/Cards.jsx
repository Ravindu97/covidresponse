import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


// const Cards = (props) => {
//     console.log(props);

//     return (
//         <h1>Cards</h1>
//     )



// }

// export default Cards;


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            COVID-19
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Showing the current situation in COVID-19 in Sri lanka.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>



            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            COVID-19
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Showing the current situation in COVID-19 in Sri lanka.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>




            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            COVID-19
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Showing the current situation in COVID-19 in Sri lanka.
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
        </div>

    );
}
