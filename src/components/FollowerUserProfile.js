import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 700,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        width: 30,
        height: 30,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    avatar: {
        alignItems:"center",
        margin: 10,
        width: 30,
        height: 30,
    },
    button: {
        fontSize: 10,
        marginLeft : 100,
        width: 40,
        height: 30
    },
}));

const FollwerUserProfile = () => {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Grid container spacing={1}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                    <Avatar className = {classes.avatar}>
                        <img className={classes.img} alt="complex" src="https://placeimg.com/512/512/1" />
                    </Avatar>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="subtitle2" >
                                Username
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                Usernickname
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button className = {classes.button} variant="contained" color="primary">팔로우</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}

export default FollwerUserProfile;
