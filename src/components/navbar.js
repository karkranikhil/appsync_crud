import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navbar=()=>{
    const Navigate=()=>{
        window.location.href="/create"
    }
    return (
        <div className="flexGrow1">
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" color="inherit" className="flexGrow1">
                Appsync Todo Demo
            </Typography>
            <Button color="inherit" onClick={Navigate}>
            Create
            </Button>
            </Toolbar>
        </AppBar>
      </div>
    )
}
export default Navbar