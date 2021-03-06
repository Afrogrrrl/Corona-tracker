import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  ButtonGroup,
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import buttonsCss from '../../css/buttons';
import actions from '../../redux/actions/actions';

const useStyles = makeStyles(() => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'scroll',
    height: '85vh',
    WebkitOverflowScrolling: 'touch',
  },
  buttons: {
    ...buttonsCss.buttons,
    width: '20vw',
    height: '10vh',
    margin: '1em',
  },
  continueButton: {
    ...buttonsCss.buttons,
    marginTop: '2vh',
    width: '50vw',
    marginBottom: '8vh',
  },
  temperatureField: {
    marginBottom: '1em',
  },
  grid: {
    overflow: 'scroll',
    marginTop: '2em',
    '@media (min-width: 780px)': {
      // eslint-disable-line no-useless-computed-key
      overflow: 'hidden',
      margin: '0 auto',
      borderBottom: '1px solid black',
    },
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '10vh',
  },
  dialog: {
    background: '#7a9cf9',
  },
  dialogText: {
    color: 'white',
  },
  buttonGroup: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    marginTop: '2em',
    '@media (min-width: 780px)': {
      // eslint-disable-line no-useless-computed-key
      margin: '0 auto',
      justifyContent: 'center',
    },
  },
  selectedButton: {
    ...buttonsCss.buttons,
    margin: '0.5em',
  },
  button: {
    ...buttonsCss.buttons,
    margin: '0.5em',
    background: 'rgba(255,255,255,0.5)',
    backgroundColor: `linear-gradient(45deg, #4760ff, #82a4f8)`,
    color: 'black',
    '&:hover': {
      ...buttonsCss.buttons,
      backgroundColor: `linear-gradient(45deg, #4760ff, #82a4f8)`,
    },
  },
  text: {
    '@media (min-width: 780px)': {
      // eslint-disable-line no-useless-computed-key
      fontSize: '2rem',
      marginTop: '0.8em',
      width: '150%',
    },
  },
}));

const SurveyPage2 = props => {
  const { setSurveyPage2 } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [fever, setFever] = useState(-1);
  const [shortnessOfBreath, setShortnessOfBreath] = useState('');
  const [chills, setChills] = useState('');
  const [dryCough, setDryCough] = useState('');
  const [chestPain, setChestPain] = useState('');
  const [fatigue, setFatigue] = useState('');
  const [soreThroat, setSoreThroat] = useState('');
  const [bluish, setBluish] = useState('');

  const handleFever = value => {
    setFever(value);
  };

  const handleshortnessOfBreath = value => {
    setShortnessOfBreath(value.toLowerCase());
  };

  const handlechills = value => {
    setChills(value.toLowerCase());
  };

  const handledryCough = value => {
    setDryCough(value.toLowerCase());
  };

  const handlechestPain = value => {
    setChestPain(value.toLowerCase());
  };

  const handlefatigue = value => {
    setFatigue(value.toLowerCase());
  };

  const handlesoreThroat = value => {
    setSoreThroat(value.toLowerCase());
  };

  const handlebluish = value => {
    setBluish(value.toLowerCase());
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitSurveyPage2 = async () => {
    if (
      fever === -1 ||
      shortnessOfBreath === '' ||
      chills === '' ||
      dryCough === '' ||
      chestPain === '' ||
      fatigue === '' ||
      soreThroat === '' ||
      bluish === ''
    ) {
      setOpen(true);
    } else {
      const surveyPage2 = {
        fever,
        shortnessOfBreath,
        chills,
        dryCough,
        chestPain,
        fatigue,
        soreThroat,
        bluish,
      };

      setSurveyPage2(surveyPage2);
    }
  };

  return (
    <div className={classes.root}>
      <Typography>
        <b>Q4: What is your temperature?</b>
      </Typography>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} xl={4}>
          <TextField type="number" onChange={e => handleFever(e.target.value)} className={classes.temperatureField}>
            Fever?
          </TextField>
        </Grid>
      </Grid>
      <Typography>
        <b>Q5: Which of the following are you feeling or exhibiting?</b>
      </Typography>

      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} xl={4} className={classes.gridItem}>
          <Typography className={classes.text}>Shortness of Breath?</Typography>
        </Grid>
        <Grid item xs={9} xl={4} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={shortnessOfBreath === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handleshortnessOfBreath(e.target.innerText)}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={shortnessOfBreath === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handleshortnessOfBreath(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={shortnessOfBreath === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handleshortnessOfBreath(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} xl={4} className={classes.gridItem}>
          <Typography className={classes.text}>Chills?</Typography>
        </Grid>
        <Grid item xs={9} xl={4} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={chills === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlechills(e.target.innerText)}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={chills === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlechills(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={chills === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlechills(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} xl={4} className={classes.gridItem}>
          <Typography className={classes.text}>Dry Cough?</Typography>
        </Grid>
        <Grid item xs={9} xl={4} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              className={dryCough === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handledryCough(e.target.innerText)}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={dryCough === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handledryCough(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={dryCough === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handledryCough(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} xl={4} className={classes.gridItem}>
          <Typography className={classes.text}>Chest Pain or Pressure?</Typography>
        </Grid>
        <Grid item xs={9} xl={4} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={chestPain === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlechestPain(e.target.innerText)}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={chestPain === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlechestPain(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={chestPain === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlechestPain(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} xl={4} className={classes.gridItem}>
          <Typography className={classes.text}>Fatigue?</Typography>
        </Grid>
        <Grid item xs={9} xl={4} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={fatigue === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlefatigue(e.target.innerText)}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={fatigue === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlefatigue(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={fatigue === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlefatigue(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} xl={4} className={classes.gridItem}>
          <Typography className={classes.text}>Sore Throat?</Typography>
        </Grid>
        <Grid item xs={9} xl={4} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={soreThroat === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlesoreThroat(e.target.innerText)}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={soreThroat === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlesoreThroat(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={soreThroat === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlesoreThroat(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className={classes.grid}>
        <Grid item xs={3} xl={4} className={classes.gridItem}>
          <Typography className={classes.text}>Bluish Lips or Face?</Typography>
        </Grid>
        <Grid item xs={9} xl={4} className={classes.gridItem}>
          <ButtonGroup color="secondary" aria-label="outlined primary button group" className={classes.buttonGroup}>
            <Button
              variant="contained"
              value="none"
              className={bluish === 'none' ? classes.selectedButton : classes.button}
              onClick={e => handlebluish(e.target.innerText)}
            >
              None
            </Button>
            <Button
              variant="contained"
              value="moderate"
              className={bluish === 'moderate' ? classes.selectedButton : classes.button}
              onClick={e => handlebluish(e.target.innerText)}
            >
              Moderate
            </Button>
            <Button
              variant="contained"
              value="severe"
              className={bluish === 'severe' ? classes.selectedButton : classes.button}
              onClick={e => handlebluish(e.target.innerText)}
            >
              Severe
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
      <Button onClick={submitSurveyPage2} variant="outlined" color="secondary" className={classes.continueButton}>
        CONTINUE
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent className={classes.dialog}>
          <DialogContentText className={classes.dialogText}>Please complete:</DialogContentText>
          {fever === -1 ? <DialogContentText className={classes.dialogText}>Fever</DialogContentText> : null}
          {shortnessOfBreath === '' ? (
            <DialogContentText className={classes.dialogText}>Shortness of Breath</DialogContentText>
          ) : null}
          {chills === '' ? <DialogContentText className={classes.dialogText}>Chills</DialogContentText> : null}
          {dryCough === '' ? <DialogContentText className={classes.dialogText}>Dry Cough</DialogContentText> : null}
          {chestPain === '' ? <DialogContentText className={classes.dialogText}>Chest Pain</DialogContentText> : null}
          {fatigue === '' ? <DialogContentText className={classes.dialogText}>Fatigue</DialogContentText> : null}
          {soreThroat === '' ? <DialogContentText className={classes.dialogText}>Sore Throat</DialogContentText> : null}
          {bluish === '' ? <DialogContentText className={classes.dialogText}>Bluishness</DialogContentText> : null}
        </DialogContent>
        <DialogActions className={classes.dialog}>
          <Button onClick={handleClose} className={classes.dialogText}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

SurveyPage2.propTypes = {
  setSurveyPage2: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    setSurveyPage2: survey => dispatch(actions.setSurveyPage2(survey)),
  };
};

export default connect(null, mapDispatchToProps)(SurveyPage2);
