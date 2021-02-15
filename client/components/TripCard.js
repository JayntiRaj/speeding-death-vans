import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Redirect} from "react-router-dom";

class TripCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openTripPage: false,
        }
        this.goToTripPage = this.goToTripPage.bind(this);
    }

    goToTripPage() {
        this.setState({openTripPage: true})
    }

    render() {
        return (
            <div>
                <Card raised onClick = {this.goToTripPage}>
                    <CardMedia image={this.props.image} style={{height: 190}}/>
                    <CardContent style={{padding: 5, textAlign: 'center'}}>
                        <Typography component="p">
                            {this.props.text}
                        </Typography>
                    </CardContent>
                </Card>
                {this.state.openTripPage && <Redirect push to={`/trip/${this.props.text}`}/>}
            </div>
        )

    }
}

export default TripCard