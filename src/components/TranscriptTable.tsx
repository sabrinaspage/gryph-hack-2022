import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";

interface transcript {
  timestamp: string;
  text: string;
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const originalRows: transcript[] = [
  {
    timestamp: "00:22:05",
    text: "breakfast page recording deter tendency technique agreement soap",
  },
  {
    timestamp: "00:52:30",
    text: "prize philosophy news visible available proof surface knife incident",
  },
  {
    timestamp: "00:52:30r",
    text: "road production exaggerate withdrawal cancel sphere reveal formation arrow",
  },
  {
    timestamp: "00:52:30r",
    text: "road production exaggerate withdrawal cancel sphere reveal formation arrow",
  },
  {
    timestamp: "00:52:30r",
    text: "road production exaggerate withdrawal cancel sphere reveal formation arrow",
  },
];

export default function BasicTable() {
  const [rows, setRows] = useState<transcript[]>(originalRows);
  const [searched, setSearched] = useState<string>("");
  const classes = useStyles();

  const requestSearch = (searchedVal: string) => {
    const filteredRows = originalRows.filter((row) => {
      return row.text.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal: string) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer style={{ maxHeight: 150 }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Timestamp</TableCell>
                <TableCell>Transcript</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.timestamp}>
                  <TableCell component="th" scope="row">
                    {row.timestamp}
                  </TableCell>
                  <TableCell>{row.text}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <br />
    </>
  );
}
