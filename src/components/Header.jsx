import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles({
  toolbarRegular: {
    minHeight: "50px",
  },

  flex1: {
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar classes={{ regular: classes.toolbarRegular }}>
        <Typography classes={{ root: classes.flex1 }}>
          This is the header
        </Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
