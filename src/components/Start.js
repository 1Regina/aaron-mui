import React from "react";
import { Box, Button, Card, Typography, useTheme } from "@mui/material";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import WhiteFont from "../theme";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(`selected a field`);
};

// const WhiteTextTypography = withStyles({
//   root: {
//     color: "#FFFFFF"
//   }
// })(Typography);

const Start = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ minHeight: "280px", minWidth: 320 }}>
        <CardCover>
          <img
            src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?crop=entropy&auto=format&fit=crop&w=3271"
            alt=""
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />

        <Box
          sx={{ "& > button": { m: 1 } }}
          display={"flex"}
          flexDirection={"column"}
          maxWidth={375}
          justifyContent={"centre"}
          margin="auto"
          marginTop={50}
          padding={2}
        >
          <CardContent>
            <WhiteFont marginBottom={1} marginLeft={3}
                fontSize="sm"
                fontWeight="lg"
                variant="h6">
              <Typography
                
              >
                Competency
              </Typography>
              <Typography
              
              >
                Tracking
              </Typography>
              <Typography
              marginBottom={2}
              >
                Application
              </Typography>
            </WhiteFont>
          </CardContent>
          <Button
            type="submit"
            variant="contained"
            // maxwidth={30}
            sx={{ marginLeft: 1 }}
          >
            Sign in as an individual
          </Button>
          <Button
            type="submit"
            variant="contained"
            // maxwidth={30}
            sx={{ marginLeft: 1 }}
          >
            Sign in as an partner
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default Start;
