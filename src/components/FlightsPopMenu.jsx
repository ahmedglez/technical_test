import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import AppContext from "contexts/AppContext";
import * as React from "react";
import { useContext } from "react";

export default function FlightsPopMenu(props) {
  const { data, label } = props;
  const { setSearch, state } = useContext(AppContext);

  const handleClick = (item) => {
    if (label === "origins") {
      setSearch({
        ...state.search,
        origin: item.label,
      });
    } else if (label === "destinations") {
      setSearch({
        ...state.search,
        destination: item.label,
      });
    }
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        scrollBehavior: "smooth",
        overflow: "auto",
        overflowY: "scroll",
        maxHeight: "400px",
      }}
    >
      {data.map((item) => (
        <ListItem
          alignItems="flex-start"
          sx={{
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
          onClick={() => handleClick(item)}
        >
          <ListItemAvatar>
            <Avatar alt="airlain logo" src={item.airlaineLogo} />
          </ListItemAvatar>
          <ListItemText
            primary={`Location: ${item.label}`}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {"Airlain Name: "} {item.airlaine}
                </Typography>
                {""}
              </React.Fragment>
            }
          />
          <Divider variant="inset" component="li" />
        </ListItem>
      ))}
    </List>
  );
}
