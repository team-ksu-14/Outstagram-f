import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import AddToPost from '@material-ui/icons/AddToPhotos';
import FollowerUserProfile from './FollowerUserProfile';
import { Grow } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
    modal: {
      borderRadius: "6px"
    },
    modalHeader: {
      borderBottom: "none",
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "0",
      paddingLeft: "24px",
      minHeight: "16.43px",
      alignItems: "center",
    },
    modalTitle: {
      margin: "0",
      lineHeight: "1.42857143"
    },
    modalCloseButton: {
      color: "#999999",
      WebkitAppearance: "none",
      padding: "0",
      cursor: "pointer",
      background: "0 0",
      border: "0",
      fontSize: "inherit",
      opacity: ".9",
      textShadow: "none",
      fontWeight: "700",
      lineHeight: "1",
      float: "right"
    },
    modalClose: {
      width: "16px",
      height: "16px"
    },
    modalBody: {
      paddingTop: "24px",
      paddingRight: "24px",
      paddingBottom: "16px",
      paddingLeft: "24px",
      position: "relative"
    },
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      maxWidth: 700,
      height: 200,
      marginTop: '40px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    image: {
      width: 128,
      height: 128,
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
      width: 120,
      height: 120,
    },
    chip: {
      marginRight: theme.spacing(6),
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow ref={ref} {...props} />;
});
  
Transition.displayName = "Transition";

export default function UserProfile() {
    const classes = useStyles();
  
    const [classicModal, setClassicModal] = React.useState(false);
    const [classModal, setClassModal] = React.useState(false);
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <Avatar className = {classes.avatar}>
                  <img className={classes.img} alt="complex" src="https://placeimg.com/512/512/1" />
                </Avatar>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={6} container>
              <Grid item container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5">
                    User ID
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    state message
                  </Typography>
                  <Typography  color="textSecondary">
                    User nickname
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Button className={classes.chip} >게시물</Button>
                  <Button 
                    className={classes.chip} 
                    onClick={() => setClassicModal(true)}
                  >팔로워
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={classicModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setClassicModal(false)}
                    aria-labelledby="classic-modal-slide-title"
                    aria-describedby="classic-modal-slide-description"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setClassicModal(false)}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>팔로워</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <FollowerUserProfile/>
                    </DialogContent>
                  </Dialog>
                  <Button 
                    className={classes.chip}
                    onClick={() => setClassModal(true)}
                  >팔로우
                  </Button>
                  <Dialog
                    classes={{
                      root: classes.center,
                      paper: classes.modal
                    }}
                    open={classModal}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setClassModal(false)}
                    aria-labelledby="classic-modal-slide-title1"
                    aria-describedby="classic-modal-slide-description1"
                  >
                    <DialogTitle
                      id="classic-modal-slide-title1"
                      disableTypography
                      className={classes.modalHeader}
                      
                    >
                      <IconButton
                        className={classes.modalCloseButton}
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setClassModal(false)}
                      >
                        <Close className={classes.modalClose} />
                      </IconButton>
                      <h4 className={classes.modalTitle}>팔로우</h4>
                    </DialogTitle>
                    <DialogContent
                      id="classic-modal-slide-description1"
                      className={classes.modalBody}
                    >
                      <FollowerUserProfile/>
                    </DialogContent>
                  </Dialog>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
                <IconButton>
                  <AddToPost/>
                </IconButton>
            </Grid>
          </Grid>
        </div>
    );
}