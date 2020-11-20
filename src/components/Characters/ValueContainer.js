import React, { useContext, useState } from "react";
import {
  Button,
  makeStyles,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import ValueDetails from "./ValueDetails";
import CharacterContext from "./CharacterContext";

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
  footer: {
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
  },
  buttonContainer: {
    flex: 1,
  },
  nextButton: {
    flex: 1,
    paddingLeft: 20,
  },
  entriesCount: {
    flex: "0 0 65%",
  },
});

const ValueContainer = ({ info, results }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  const classes = useStyles();
  const [page, setPage] = useContext(CharacterContext);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.row}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Species</TableCell>
            <TableCell align="right">Origin</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.species}</TableCell>
              <TableCell align="right">{row.origin.name}</TableCell>
              <TableCell align="right">{row.location.name}</TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  color="primary"
                  href="#details"
                  onClick={() => {
                    setId(row.id);
                    setOpen(true);
                  }}
                >
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.footer}>
        <div className={classes.buttonContainer}>
          <Button
            variant="outlined"
            color="primary"
            href="#details"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="#details"
            disabled={info.count - page * 20 <= 20}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
      <Modal
        style={{
          width: "50%",
          maxWidth: "50vw",
          maxHeight: "100%",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          overflowY: "auto",
          borderRadius: 16,
          boxShadow: "5px 5px #B7BDE0",
          backgroundColor: "#e3e5f1",
        }}
        hideBackdrop
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ValueDetails id={id} />
      </Modal>
    </TableContainer>
  );
};

export default ValueContainer;
