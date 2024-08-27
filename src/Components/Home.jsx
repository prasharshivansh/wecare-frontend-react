import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <div
      style={{
        padding: "10rem",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h3">
            We are at the heart of appropriate care
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                width: 300,
                backgroundColor: "black",
                borderRadius: 2,
                textAlign: "center",
                p: 2,
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Coach Icon"
                  />
                </Box>
                <Button
                  href="/coachlogin"
                  variant="contained"
                  sx={{ mb: 1, backgroundColor: "#00B0FF" }}
                >
                  Login as a Coach
                </Button>
                <Button
                  href="/coachsignup"
                  variant="contained"
                  sx={{ backgroundColor: "#00B0FF" }}
                >
                  Join as a Coach
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                width: 300,
                backgroundColor: "black",
                borderRadius: 2,
                textAlign: "center",
                ml: 35,
                p: 2,
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYCf-d9Z1LXJHwFAxRRoE3JnoGsaKazY6s0dZ6vwrMA&s"
                    alt="User Icon"
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{ mb: 1, backgroundColor: "#00B0FF" }}
                >
                  Login as a User
                </Button>
                <Button href="/usersignup" variant="contained" sx={{ backgroundColor: "#00B0FF" }}>
                  Join as a User
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", pt: 30 }}>
          <Typography variant="body2">
            Copyright © 2020, WeCare. All rights reserved
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
