import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    color: "white",
  },
  appBar: {
    backgroundColor: "#3f51b5",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Widget Showcase
          </Typography>
        </Toolbar>
      </AppBar>
      <style>
        {`
          @media only screen and (max-width: 600px) {
            .MuiToolbar-root {
              flex-direction: column;
              align-items: center;
            }
          }
        `}
      </style>
    </div>
  );
}
