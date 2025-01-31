import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material/';
import { withStyles } from '@mui/styles';
import emailjs from '@emailjs/browser';
import '../Button.css';

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
}

export class Confirm extends Component {

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

  sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_thog09r', 'template_05qq247', e.target, 'user_gPHNoNvHZXPJbxdR46FjF')
      .then((result) => {
        console.log(result.text);
        this.props.nextStep();
      }, (error) => {
        console.log(error.text);
      });

  }

  render() {
    const { classes } = this.props;
    const { values: {
      fullName,
      phoneNumber,
      address,
      cityStateZip,
      country,
      email,
      occupation,
      dateOfBirth,
      gender,
      marriageStatus,
      description,
      clarity,
      energy,
      courage,
      productivity,
      influence,
      doForLiving,
      threeGoals,
      stressors,
      successful,
      dreamLife,
      prevent,
      goalFail,
      threeChanges,
      proud,
      negative,
      habits,
      distractions,
      desire,
      struggle,
      purposeful,
      whyCareerCoach,
      whyStudent
    } } = this.props;
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
                  CONFIRM QUESTIONNAIRE DATA
              </Typography>
              </Toolbar>
            </AppBar>
            <div>
              <div className="container">
                <form onSubmit={this.sendEmail}>
                  <List>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="name" value={fullName} />
                      </div>
                      <ListItemText primary="Full Name"
                        secondary={fullName} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="phoneNumber" value={phoneNumber} />
                      </div>
                      <ListItemText primary="Phone Number"
                        secondary={phoneNumber} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="address" value={address} />
                      </div>
                      <ListItemText primary="Address"
                        secondary={address} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="cityStateZip" value={cityStateZip} />
                      </div>
                      <ListItemText primary="City, State, Zip"
                        secondary={cityStateZip} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="country" value={country} />
                      </div>
                      <ListItemText primary="Country"
                        secondary={country} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="email" value={email} />
                      </div>
                      <ListItemText primary="Email"
                        secondary={email} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="occupation" value={occupation} />
                      </div>
                      <ListItemText primary="Occupation"
                        secondary={occupation} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="dateOfBirth" value={dateOfBirth} />
                      </div>
                      <ListItemText primary="Date of Birth"
                        secondary={dateOfBirth} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="gender" value={gender} />
                      </div>
                      <ListItemText primary="Gender"
                        secondary={gender} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="marriageStatus" value={marriageStatus} />
                      </div>
                      <ListItemText primary="Marriage Status"
                        secondary={marriageStatus} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="description" value={description} />
                      </div>
                      <ListItemText primary="Please briefly describe how you heard about my coaching services and why you would like a Strategy Session with me:"
                        secondary={description} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="clarity" value={clarity} />
                      </div>
                      <ListItemText primary="Do you feel you are clear about who you are, your purpose, and the direction you want to
go in life?"
                        secondary={clarity} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="energy" value={energy} />
                      </div>
                      <ListItemText primary="Do you consistently have enough mental and physical energy needed to excel, accomplish
your goals, and feel motivated and happy?"
                        secondary={energy} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="courage" value={courage} />
                      </div>
                      <ListItemText primary="Do you take action and consistently express who you truly are and what you truly think,
need, and desire with the world?"
                        secondary={courage} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="productivity" value={productivity} />
                      </div>
                      <ListItemText primary="Are you consistently focused and effective, and are you good at minimizing distractions
and maintaining priorities?"
                        secondary={productivity} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="influence" value={influence} />
                      </div>
                      <ListItemText primary="Do you feel you have the social influence with your family, friends, and team needed to
accomplish your goals?"
                        secondary={influence} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="doForLiving" value={doForLiving} />
                      </div>
                      <ListItemText primary="What do you do for a living, and why did you choose that career?"
                        secondary={doForLiving} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="threeGoals" value={threeGoals} />
                      </div>
                      <ListItemText primary="What are your top 3 goals you are striving to achieve right now?"
                        secondary={threeGoals} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="stressors" value={stressors} />
                      </div>
                      <ListItemText primary="What major stressors or challenges are you struggling with right now?"
                        secondary={stressors} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="successful" value={successful} />
                      </div>
                      <ListItemText primary="When you feel like your most successful and happy self, what makes you feel that way?"
                        secondary={successful} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="dreamLife" value={dreamLife} />
                      </div>
                      <ListItemText primary="What would your dream life look like if you could wave a wand and make it happen?"
                        secondary={dreamLife} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="prevent" value={prevent} />
                      </div>
                      <ListItemText primary="What else has prevented you from having that dream life?"
                        secondary={prevent} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="goalFail" value={goalFail} />
                      </div>
                      <ListItemText primary="What goal or dream have you ever given up on or failed at, and what do you believe caused you to stop or fail?"
                        secondary={goalFail} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="threeChanges" value={threeChanges} />
                      </div>
                      <ListItemText primary="What 3 big changes would you like to make in your life in the next 12 months?"
                        secondary={threeChanges} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="proud" value={proud} />
                      </div>
                      <ListItemText primary="What are you most proud of and excited about in your life?"
                        secondary={proud} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="negative" value={negative} />
                      </div>
                      <ListItemText primary="What negative recurring thoughts, fears, or behaviors would you like to overcome in order to feel more psychologically free,
confident and successful?"
                        secondary={negative} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="habits" value={habits} />
                      </div>
                      <ListItemText primary="What eating, exercise or general health habits would you like to begin or break in order to feel stronger and more healthy
physiologically?"
                        secondary={habits} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="distractions" value={distractions} />
                      </div>
                      <ListItemText primary="What distracts you the most from being more productive, and what major projects or missions are you struggling to complete
faster or more efficiently?"
                        secondary={distractions} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="desire" value={desire} />
                      </div>
                      <ListItemText primary="If you were more persuasive or influential, what dream or desire would you ask others to support you in achieving?"
                        secondary={desire} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="struggle" value={struggle} />
                      </div>
                      <ListItemText primary="When do you struggle to be fully present in your day or in any of your relationships?"
                        secondary={struggle} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="purposeful" value={purposeful} />
                      </div>
                      <ListItemText primary="How purposeful do you feel in living each day, and how would you describe your purpose?"
                        secondary={purposeful} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="whyCareerCoach" value={whyCareerCoach} />
                      </div>
                      <ListItemText primary="Why would you like to work with a high performance coach?"
                        secondary={whyCareerCoach} />
                    </ListItem>
                    <ListItem>
                      <div className="col-8 form-group mx-auto">
                        <input type="hidden" className="form-control" name="whyStudent" value={whyStudent} />
                      </div>
                      <ListItemText primary="Why do you feel you could be a great student or coaching client if we worked together?"
                        secondary={whyStudent} />
                    </ListItem>
                  </List>
                  <Box textAlign='center'>
                    <Button
                      size="large"
                      color="main"
                      variant="contained">
                      <input type="submit" id="submitBtn" value="CONFIRM & CONTINUE"></input>
                    </Button>
                  </Box>
                  <br />
                  <Box textAlign='center'>
                    <Button
                      size="large"
                      color="main"
                      variant="contained"
                      onClick={this.back}
                    >Back</Button>
                  </Box>
                </form>
              </div>
            </div>
          </Box>
        </>
      </MuiThemeProvider >
    )
  }
}


export default withStyles(styles)(Confirm);