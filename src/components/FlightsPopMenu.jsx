import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function FlightsPopMenu(props) {
  const { data } = props;

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
        <ListItem alignItems="flex-start">
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
