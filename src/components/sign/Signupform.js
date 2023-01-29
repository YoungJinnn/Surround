import React from 'react';
import { Grid, Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import login_logo from "img/login_logo.png";
import sign_backgroundppl from "img/sign_backgroundppl.png";
import sign_ment from "img/sign_ment.png";

const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: '#999999',
            backgroundColor: '#FFFFFF',
            '&.Mui-focused': {
              color: '#999999'
            }
          }
        }
      }
    },
    palette: {
      secondary: { main: '#757575' },
      warning: { main: '#D34658' },
      Black: { main: "#121212" },
      Gray4: { main: "#999999" },
    },
  });

const Signupform = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <Grid container className='sign_background' justifyContent='center' alignItems='center'>
        <Grid item container className='sign_container' xs={12} sm={10} md={10} lg={9} xl={8} sx={{position: "relative"}}>
            <img src={sign_backgroundppl} alt='sign_backgroundppl' style={{width: "100%", position: "absolute", bottom: '0%'}}/>  
            <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
                <Grid className='signup_div'>
                  <img src={login_logo} alt='login_logo' style={{width: "50%", marginBottom: "60px"}}/>
                    <FormControl sx={{ width: '70%', marginRight: '0%', marginBottom: '16px', backgroundColor: '#ffffff'}}>
                        <InputLabel shrink>Email</InputLabel>
                        <OutlinedInput className='signup_input'
                        sx={{ height: '48px' }}
                        color='Gray4'
                        label='Email'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={props.signup.email}
                        onChange={props.handleChangeSignup}
                        />
                    </FormControl>
                    <FormControl sx={{ width: '70%', marginRight: '0%', marginBottom: '20px', backgroundColor: '#ffffff' }}>
                        <InputLabel shrink>Password</InputLabel>
                        <OutlinedInput className='signup_input'
                        sx={{ height: '48px' }}
                        color='Gray4'
                        label='Password'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={props.signup.password}
                        onChange={props.handleChangeSignup}
                        />
                    </FormControl>
                    <FormControl sx={{ width: '70%', marginRight: '0%', marginBottom: '20px', backgroundColor: '#ffffff' }}>
                        <InputLabel shrink>Confirm Password</InputLabel>
                        <OutlinedInput className='signup_input'
                        sx={{ height: '48px' }}
                        color='Gray4'
                        label='Confirm Password'
                        type='password'
                        name='passwordCheck'
                        placeholder='Confirm your password'
                        value={props.signup.passwordCheck}
                        onChange={props.handleChangeSignup}
                        />
                    </FormControl>

                    <FormControl sx={{ width: '70%', marginRight: '0%', marginBottom: '20px', backgroundColor: '#ffffff' }}>
                        <InputLabel shrink>Nickname</InputLabel>
                        <OutlinedInput className='signup_input'
                        sx={{ height: '48px' }}
                        color='Gray4'
                        label='Nickname'
                        type='text'
                        name='nickname'
                        placeholder='Enter your nickname'
                        value={props.signup.major}
                        onChange={props.handleChangeSignup}
                        />
                    </FormControl>

                    <Button 
                      color='Black' variant="contained" 
                      disabled={props.signup.email && props.signup.nickname && props.signup.password && props.signup.passwordCheck ?false:true} o
                      nClick={props.handleClickSignUp}
                      sx={{color: "white", fontSize: "16px", fontWeight: "bold"}}
                      >
                        Sign Up
                      </Button>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={7} xl={8} justifyContent='center' alignItems='center'>
                <Grid className='sign_info'>
                    <img src={sign_ment} alt='sign_ment' style={{width: "80%", marginTop: "60px", zIndex: "1"}}/>
                    {/* <h3>Upload and share your music</h3>
                    <h3>Follow your favorite artists</h3>
                    <h3>Create and publish playlists</h3>
                    <h3>And much more</h3> */}
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
};

export default Signupform;