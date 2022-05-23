import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { SessionType } from "../pages/video";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface BasicTableProps {
  transcriptRows: SessionType[] | undefined;
}

export default function BasicTable({ transcriptRows }: BasicTableProps) {
  const [rows, setRows] = useState<SessionType[] | undefined>(transcriptRows);
  const [searched, setSearched] = useState<string>("");
  const classes = useStyles();

  const requestSearch = (searchedVal: string) => {
    const filteredRows = rows?.filter((row) => {
      return row.transcript.toLowerCase().includes(searchedVal.toLowerCase());
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
        <TableContainer style={{ maxHeight: 100 }}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {transcriptRows?.slice(1).map((row) => (
                <TableRow key={row.transcript}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ borderBottom: "none", color: "#A4A4A4" }}
                  >
                    {row.start_time} - {row.end_time}
                  </TableCell>
                  <TableCell style={{ borderBottom: "none", color: "#A4A4A4" }}>
                    {row.transcript}
                  </TableCell>
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
