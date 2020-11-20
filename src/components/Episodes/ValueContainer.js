import React from "react";
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
  footer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

const ValueContainer = ({ info, results }) => {
  console.log(info);
  console.log(results);
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Dimension</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.dimension}</TableCell>
              <TableCell align="right">{row.created}</TableCell>
              <TableCell align="right">
                <Button variant="outlined" color="primary" href="#details">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.footer}>Showing 20 of {info.count} entries</div>
    </TableContainer>
  );
};

export default ValueContainer;
