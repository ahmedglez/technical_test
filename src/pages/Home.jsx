import React from "react";
import DefaultLayout from "layouts/DeafaultLayout";
import FlightSearcher from "containers/FlightSearcher";

const Home = () => {
  return (
    <DefaultLayout>
      <FlightSearcher />
    </DefaultLayout>
  );
};

export default Home;
