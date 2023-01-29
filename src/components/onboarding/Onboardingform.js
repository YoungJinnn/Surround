import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { CircularProgress, Link, Button, Grid } from "@mui/material";

const Onboardingform = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding" style={{position: "relative"}}>
        {/* <img
          src={Onboarding_page}
          alt='Onboarding_page'
          style={{ width: '100%' }}
          onClick={()=>{navigate("/login")}}
        /> */}
          <Button
            style={{ padding: '15px 40px 15px 40px', borderRadius: '10px', position: "absolute", bottom: '35%', left: '17%'}}
            color="Black"
            variant="contained"
            onClick={()=>{navigate("/login")}}
            sx={{color: "white", fontSize: "16px", fontWeight: "bold"}}
          >
            Get Surround Free
            <EastRoundedIcon sx={{marginLeft: '10px'}}/>
        </Button>
    </div>
  )
};

export default Onboardingform;