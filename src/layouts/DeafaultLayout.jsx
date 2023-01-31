import { Box } from "@mui/material";
import Navbar from "components/DefaultNavBar";
import Footer from "components/Footer";

const DefaultLayout = (props) => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      container
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minHeight="100vh"
      backgroundColor="#f5f5f5"
    >
      <Box sx={{ flexGrow: 1 }} item xs={12} md={12} lg={10} xl={8}>
        <Navbar />
      </Box>
      <Box sx={{ flexGrow: 1 }} item xs={12} md={12} lg={12} xl={12}>
        {props.children}
      </Box>
      <Box sx={{ flexGrow: 1 }} item xs={12} md={12} lg={12} xl={12}>
      </Box>
    </Box>
  );
};

export default DefaultLayout;
