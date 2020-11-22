import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
//import Content from "../Dashboard/Content";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DriveIcon from "@material-ui/icons/DriveEta";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Container from "@material-ui/core/Container";
import { getDisplayDate } from "@material-ui/pickers/_helpers/text-field-helper";
//import PeopleDialog from "./PeopleDialog";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    position: "relative",
    height: "100px",
  },

  heroContent: {
    backgroundColor: '#383B40',
    padding: theme.spacing(8, 0, 6),
    height: '100vh',
    
},

  paper: {
    padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        
        backgroundColor : '#383B40'
  },

  header: {
    display: "flex",
    position: "absolute",
    width: "calc(100%)",
    top: "-70px",
    alignItems: "flex-end",
    "& > *": {
      margin: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
    },
  },
  spacer: {
    flexGrow: "1",
  },
  avatar: {
    border: `3px solid white`,
    width: theme.spacing(13),
    height: theme.spacing(13),
    boxShadow: theme.shadows[3],
  },
  actionGroup: {
    display: "flex",
    width: "330px",
    justifyContent: "space-between",
    marginRight: 0,
  },
  summaryCards: {
    display: "flex",
    flexWrap: "wrap",
  },
  summaryCard: {
    margin: theme.spacing(1),
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tripCard: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));

export function SummaryCard({ title, value, component }) {
  const classes = useStyles();
  return (
    <Paper elevation={2} className={classes.summaryCard}>
      <Typography color={"textSecondary"} variant="h5" gutterBottom>
        {title}
      </Typography>
      {component || (
        <Typography color={"primary"} variant="h3">
          {value}
        </Typography>
      )}
    </Paper>
  );
}

export default function Profile() {
  const classes = useStyles()

  const [profile, setProfile] = useState({})


  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    const data = await fetch('/api/bios/luisenriquesanjuanmelo')
    const profile = await data.json()
    console.log(profile)
    setProfile(profile)
  }

  return (
    <Container className={classes.heroContent}>
     <div className={classes.headerContainer}>
        <div className={classes.header}>
          
          <Typography variant={"h5"}>{JSON.stringify(profile.person.name)}</Typography>
          <Chip variant={"outlined"} icon={<DriveIcon />} label="Driver" />
          <Rating name="read-only" value={4.3} readOnly />
          <div className={classes.spacer} />
          <div className={classes.actionGroup}>
          </div>
        </div>
      </div>
      <div className={classes.summaryCards}>
        <SummaryCard title={"Revenue"} />
        <SummaryCard title={"Trips"}  />
        <SummaryCard title={"Miles"}  />
        <SummaryCard title={"Rating"}  />
      </div>
      <div className={classes.summaryCards}>
        <SummaryCard title="Last 30 Days"  />
        <SummaryCard title="By Vehicle"  />
      </div>
    </Container>
  );
  
}
