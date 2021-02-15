import React from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TripCard from './TripCard';

class TripsList extends React.Component {
    render() {
        return (
            <div style ={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overflow: 'hidden', margin: 30}}>
                <GridList cellHeight={240} cols={1} style ={{height: 650, width: "70%"}}>
                    {/*tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                    ))*/}
                    <GridListTile cols={1}>
                        <TripCard image={window.location.origin + "/img/Singapore.jpg"} text="Singapore"/>
                    </GridListTile>

                    <GridListTile cols={1}>
                    <TripCard image={window.location.origin + "/img/Thailand.jpg"} text="Thailand"/>
                    </GridListTile>

                    <GridListTile cols={1}>
                    <TripCard image={window.location.origin + "/img/NewYork.jpg"} text="New York"/>
                    </GridListTile>

                    <GridListTile cols={1}>
                    <TripCard text="Place 4"/>
                    </GridListTile>

                    <GridListTile cols={1}>
                    <TripCard text="Place 5"/>
                    </GridListTile>

                    <GridListTile cols={1}>
                    <TripCard text="Plac 6"/>
                    </GridListTile>

                    <GridListTile cols={1}>
                    <TripCard text="Place 7"/>
                    </GridListTile>
                    <GridListTile cols={1}>
                    <TripCard text="Place 8"/>
                    </GridListTile>

                    <GridListTile cols={1}>
                    <TripCard text="Place 9"/>
                    </GridListTile>

                </GridList>
            </div>
        );
    }

}

export default TripsList