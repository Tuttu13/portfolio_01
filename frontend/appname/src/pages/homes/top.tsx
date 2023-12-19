import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MV from "../../assets/images/mv.jpg"
import SkillList from "../../components/SkillLists"
import ProductionList from "../../components/ProductionList"
import ProfileList from "../../components/ProfileList"
import ContactForm from "../../components/ContactForm"

const box_position = {
    margin:'auto',
    width:'auto',
    height:'auto'
}

const Top: React.FC = () => {
    return(
        <>
            <Box sx={{ height: "55vh", backgroundImage: "url(" + MV + ")", backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                <Container sx={{ height:450, display: "flex" , justifyContent: 'center', alignItems: 'center', color: "#FFFFFF", textShadow: "1px 1px 3px #000000" }}>
                    <Grid>
                        <Grid>
                            <Typography component="h2"  variant="h2">
                                KTのポートフォリオ
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography>
                                reactとdjangoによるwebアプリ
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={box_position}>
                <Container maxWidth='md' >
                    <ProfileList />
                </Container>
            </Box>
            <Box sx={box_position}>
                <Container maxWidth='md'>
                    <SkillList />
                </Container>
            </Box>
            <Box sx={box_position}>
                <Container maxWidth='md'>
                    <ProductionList />
                </Container>
            </Box >
            <Box sx={box_position}>
                <Container maxWidth='md'>
                    <ContactForm />
                </Container>
            </Box>
        </>
    );
};

export default Top;