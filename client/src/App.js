import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts'
import Post from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import memories from './images/memories.png';
import useStyles from './style'

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item sx={12} sm={7}>
                            <Post currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item sx={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
export default App;