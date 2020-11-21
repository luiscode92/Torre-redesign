import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Container from "@material-ui/core/Container";
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';
import { PlayCircleFilledWhite } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: "300px",
        Border: 'white solid 1px',
        
        backgroundColor : '#383B40'
    },
    heroContent: {
        backgroundColor: '#383B40',
        padding: theme.spacing(8, 0, 6),
        height: '100vh',
        
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color : 'white',
        
    },
    iconButton: {
        padding: 10,
        color: 'rgb(205, 220, 57)'
    },
  }));


export default function Search() {
    const classes = useStyles();
  return (
    <div className={classes.heroContent} >
    <Container maxWidth="xs">
      <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search jobs"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
    </div>
  );
}
