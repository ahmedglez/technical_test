import {
  TextField,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import AppContext from "contexts/AppContext";

const ResultsContainer = () => {
  const { state } = useContext(AppContext);
  const { results } = state;
  const [mobileView, setMobileView] = useState(window.innerWidth < 600);
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    setResultList(results);
    const setResponsiveness = () => {
      return window.innerWidth < 600 ? setMobileView(true) : setMobileView(false);
    };
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, [results]);

  return (
    <React.Fragment>
      <Typography
        variant="h4"
        component="h4"
        sx={{ textAlign: "center", margin: "1rem" }}
      ></Typography>
      {resultList.length > 0 ? (
        <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
          <Grid container spacing={2}>
            {resultList.map((result) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image={result.airlineLogo}
                    alt="airlineLogo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {"Airline name: "}
                      {result.airline}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {"Departure: "}
                      {result.departure}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {"Arrival: "}
                      {result.arrival}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {"Price: "}
                      {"$"} {result.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {"Duration: "}
                      {new Date(result.duration * 1000).toISOString().substr(11, 8)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="h4" component="div" gutterBottom>
                {"No results"}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
};

export default ResultsContainer;
