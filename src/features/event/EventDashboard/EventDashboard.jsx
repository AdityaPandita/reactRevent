import React, { Component } from './node_modules/react';
import { Grid } from './node_modules/semantic-ui-react';
import EventList from '../EventList/EventList';
import EventListAttendee from '../EventList/EventListAttendee';

class EventDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.col width={10}>
                    <EventList/>
                </Grid.col>
                <Grid.col width={6}>
                    <EventListAttendee/>
                </Grid.col>
            </Grid>
        );
    }
}


export default EventDashboard;