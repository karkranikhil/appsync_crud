import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom'
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";
import {deleteTodo} from '../graphql/mutations'
import {listTodOs} from '../graphql/queries'
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


const CustomizedTable=(props) =>{
  const { classes, data, deleteHandler } = props;

 
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>First Name</CustomTableCell>
            <CustomTableCell>Last Name</CustomTableCell>
            <CustomTableCell>Age</CustomTableCell>
            <CustomTableCell>Employer</CustomTableCell>
            <CustomTableCell>Task</CustomTableCell>
            <CustomTableCell>Status</CustomTableCell>
            <CustomTableCell align="center">Action</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">{row.firstName}</CustomTableCell>
              <CustomTableCell>{row.lastName}</CustomTableCell>
              <CustomTableCell>{row.age}</CustomTableCell>
              <CustomTableCell>{row.employer}</CustomTableCell>
              <CustomTableCell>{row.task}</CustomTableCell>
              <CustomTableCell>{row.status}</CustomTableCell>
              <CustomTableCell align="center">
              <Button variant="contained" color="primary" className="marginLR10">
              <Link to={`/create/${row.id}`}>Edit</Link>
            </Button>
            <Mutation mutation={gql(deleteTodo)}>
                {(deleteTodo, { loading, error }) => {
                    return <Button variant="contained" color="secondary" onClick={(e)=>deleteHandler(e, deleteTodo, row.id)}>
                        Delete
                    </Button>
                }}
            </Mutation>
            
              
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
