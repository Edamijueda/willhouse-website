import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { withStyles } from '@mui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(83, 108, 140)'
    }
  },
  status: {
    danger: orange[500],
  },
});

const styles = {
  root: {
    [theme.breakpoints.down('sm')]: {
      paddingRight: '5%',
      paddingLeft: '5%',
      paddingBottom: '5%'
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: '20%',
      paddingLeft: '20%',
      paddingBottom: '5%'
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight: '25%',
      paddingLeft: '25%',
      paddingBottom: '5%'
    },
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      padding: '60px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '60px'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '15px'
    },
  }
}

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <>
          <Box className={classes.root}>
            <AppBar
              position="static"
              style={{ background: 'rgb(83, 108, 140)' }}
            >
              <Toolbar variant="dense">
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  QUESTIONNAIRE FOR YOUR COACHING STRATEGY SESSION
                </Typography>
              </Toolbar>
            </AppBar>
            <br /><br />
            <TextField
              className={classes.text}
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Do you feel you are clear about who you are, your purpose, and the direction you want to
              go in life?"
              onChange={handleChange('clarity')}
              defaultValue={values.clarity}
              margin="normal"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
              fullWidth
            />
            <br />
            <TextField
              className={classes.text}
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Do you consistently have enough mental and physical energy needed to excel, accomplish
              your goals, and feel motivated and happy?"
              onChange={handleChange('energy')}
              defaultValue={values.energy}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}

            />
            <br />
            <TextField
              className={classes.text}
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Do you take action and consistently express who you truly are and what you truly think,
              need, and desire with the world?"
              onChange={handleChange('courage')}
              defaultValue={values.courage}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
            <br />
            <TextField
              className={classes.text}
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Are you consistently focused and effective, and are you good at minimizing distractions
              and maintaining priorities?"
              onChange={handleChange('productivity')}
              defaultValue={values.productivity}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
            <br />
            <TextField
              className={classes.text}
              placeholder="Please rate yourself on a scale from 1 (the lowest) to 10 (the highest)"
              label="Do you feel you have the social influence with your family, friends, and team needed to
              accomplish your goals?"
              onChange={handleChange('influence')}
              defaultValue={values.influence}
              margin="normal"
              fullWidth
              type="number"
              InputProps={{ inputProps: { min: 0, max: 10 } }}
            />
            <br /><br /><br />
            <FormLabel component="legend">What do you do for a living, and why did you choose that career?</FormLabel>
            <TextField
              onChange={handleChange('doForLiving')}
              defaultValue={values.doForLiving}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What are your top 3 goals you are striving to achieve right now?</FormLabel>
            <TextField
              onChange={handleChange('threeGoals')}
              defaultValue={values.threeGoals}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">What major stressors or challenges are you struggling with right now?</FormLabel>
            <TextField
              onChange={handleChange('stressors')}
              defaultValue={values.stressors}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <br /><br />
            <FormLabel component="legend">When you feel like your most successful and happy self, what makes you feel that way?</FormLabel>
            <TextField
              onChange={handleChange('successful')}
              defaultValue={values.successful}
              margin="normal"
              fullWidth
              multiline
              variant="outlined"
            />
            <Box textAlign='center'>
              <Button
                size="large"
                color="main"
                variant="contained"
                onClick={this.back}
              >Back</ Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                size="large"
                color="main"
                variant="contained"
                onClick={this.continue}
              >Continue</ Button>
            </Box>
          </Box>
        </>
      </MuiThemeProvider>
    )
  }
}


export default withStyles(styles)(FormPersonalDetails);