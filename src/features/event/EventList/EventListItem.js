import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  //initialization should happen before renders into real DOM
  //to avoid immidiate execution of selectevent we wrapped method in Array method
  render() {
    const { event,selectEvent,deleteEventId} = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image 
                size="tiny" 
                circular
                src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header >{event.title}</Item.Header>
                <Item.Description>
                  Hosted by 
                  {event.hostedBy}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {/* todo: attendees go here */}
            {event.attendee && event.attendees.map((attendee) => {
              return (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              );
            })}
          </List>
        </Segment>
        <Segment clearing>
          <span> {event.description}</span>
          <Button 
          onClick={(evt)=> {selectEvent(evt,event)}}
          as="a" 
          color="teal" 
          floated="right" 
          content="View" 
         />
         <Button 
          onClick={()=> {deleteEventId(event.id)}}
          as="a" 
          color="red" 
          floated="right" 
          content="Delete" 
         />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
