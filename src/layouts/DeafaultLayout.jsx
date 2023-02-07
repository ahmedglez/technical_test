import { Grid } from "@mui/material";
import Navbar from "components/DefaultNavBar";
import Footer from "components/Footer";

const DefaultLayout = (props) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="#f5f5f5"
    >
      <Grid item xs={12} md={12} lg={10} xl={8} mb={8}>
        <Navbar />
      </Grid>

      <Grid item xs={12} md={12} lg={12} xl={12}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default DefaultLayout;
