import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import PV from "../assets/images/profile_image.jpg";

const myImageStyle = {display: "center" , width: 300, height: 200 };

const ProfileList: React.FC = () => {
    return(
        <>
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
                    <Typography component="h2" variant="h2">
                        Profile
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box>
                        <img style={myImageStyle} src={PV} alt="profile_image.jpg"/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ width: "100%", paddingLeft: {sx: "0px", md: "30px"} }}>
                        <Typography variant="body2" color="text.secondary">
                            <p>KTとは</p>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default ProfileList;