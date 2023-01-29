import React from "react";
import { CircularProgress, Link, Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import KakaoLogo from "img/kakao_logo.png";
import login_logo from "img/login_logo.png";
import sign_backgroundppl from "img/sign_backgroundppl.png";
import sign_ment from "img/sign_ment.png";

require("dotenv").config();

const Loginform = (props) => {
  const navigate = useNavigate();

  return (
      <Grid container className="sign_background" justifyContent="center" alignItems="center">
        <Grid item container className="sign_container" xs={12} sm={10} md={10} lg={9} xl={8} sx={{position: "relative"}}>
              <img src={sign_backgroundppl} alt='sign_backgroundppl' style={{width: "100%", position: "absolute", bottom: '0%',}}/>    
          <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
            <Grid className="login_div">
              <img src={login_logo} alt='login_logo' style={{width: "50%", marginBottom: "60px"}}/>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={props.login.email}
                onChange={props.handleChangeLogin}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={props.login.password}
                onChange={props.handleChangeLogin}
              />
              <Button
                color="Black"
                className="login_button"
                variant="contained"
                disabled={
                  props.login.email && props.login.password ? false : true
                }
                onClick={props.handleClickLogin}
                sx={{color: "white", fontSize: "16px", fontWeight: "bold"}}
              >
                Continue
              </Button>
              <a
                href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`}
                className="kakao_login"
                // onClick={props.kakaoLogin}
              >
                <img src={KakaoLogo} alt="kakao logo" />
                <span sx={{fontSize: "16px", fontWeight: "bold"}}>Sign in with kakaotalk</span>
              </a>
              <p style={{zIndex: "1"}}>
                Don't have an account?{" "}
                <Link onClick={() => {navigate("/login/signup");}}>
                  Sign Up
                </Link>
              </p>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={7} xl={8} justifyContent="center" alignItems="center">
            <Grid className="sign_info">
            <img src={sign_ment} alt='sign_ment' style={{width: "80%", marginTop: "60px", zIndex: "1"}}/>
              {/* <h3>Upload and share your music</h3>
              <h3>Follow your favorite artists</h3>
              <h3>Create and publish playlists</h3>
              <h3>And much more</h3> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default Loginform;
