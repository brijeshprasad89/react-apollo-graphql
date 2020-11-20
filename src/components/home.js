import { makeStyles } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    position: "relative",
    marginLeft: 200,
    marginRight: 200,
    marginTop: 50,
    backgroundColor: "#f0f2f5",
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
