import React from "react";
import DefaultLayout from "layouts/DeafaultLayout";
import FlightSearcher from "containers/FlightSearcher";
import ResultsContainer from "containers/ResultsContainer";

const Home = () => {
  return (
    <DefaultLayout>
      <FlightSearcher />
      <ResultsContainer />
    </DefaultLayout>
  );
};

export default Home;
