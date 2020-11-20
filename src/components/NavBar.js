import { AppBar, makeStyles, Paper, Tab, Tabs } from "@material-ui/core";
import React from "react";
import Characters from "./Characters/Characters";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import TabPanel from "./TabPanel/TabPanel";
import Episodes from "./Episodes/Episodes";
import Locations from "./Locations/Locations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const NavBar = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);

  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab
            label="Characters"
            onFocus={() => {
              history.push("/characters");
            }}
          />
          <Tab
            label="Episodes"
            onFocus={() => {
              history.push("/episodes");
            }}
          />
          <Tab
            label="Locaiton"
            onFocus={() => {
              history.push("/locations");
            }}
          />
        </Tabs>
      </Paper>
      <TabPanel value={value} index="0">
        <Characters />
      </TabPanel>
      <TabPanel value={value} index="1">
        <Episodes />
      </TabPanel>
      <TabPanel value={value} index="2">
        <Locations />
      </TabPanel>
    </div>
  );
};

export default NavBar;
