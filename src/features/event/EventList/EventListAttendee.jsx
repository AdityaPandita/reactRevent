import React, { Component } from 'react'
import { List } from 'semantic-ui-react';

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image 
                    as='a' 
                    size ='mimi' 
                    circular 
                    src='https://randomuser.me/api/portraits/women/42.jpg'/>
            </List.Item>

        )
    }
}

export default EventListAttendee;