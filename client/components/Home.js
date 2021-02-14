import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import FlightIcon from '@material-ui/icons/Flight';
import {Redirect} from "react-router-dom";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            createTrip: false
        };
      
        this.goToCreateTripPage = this.goToCreateTripPage.bind(this)
    }

    goToCreateTripPage() {
        this.setState({createTrip: true})
    }

    render() {
        return (
            <div className="homepage">
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <Grid item>
                            <Typography style={{fontSize: 80, marginTop: 20, marginLeft: 20, color: "orange"}}>
                            Niño and Jaynto's World travels
                            </Typography>
                        </Grid>
                        <Grid item style = {{display: "flex", justifyContent: "center", marginTop: "20%"}}>
                            <Fab variant="extended" size="large" onClick = {this.goToCreateTripPage} style={{backgroundColor: "orange"}}>
                                <FlightIcon style={{marginRight: 10}}/>
                                <Typography >
                                    Plan a trip
                                </Typography>
                            </Fab>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        trips
                    </Grid>
                </Grid>
                {this.state.createTrip && <Redirect push to="/createTrip"/>}
            </div>
        );
    }
}

export default Home
