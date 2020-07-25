import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    return (
      <Fragment>
        {events.map((event) => {
          return (
            <EventListItem
              key={event.id}
              event={event}
              selectEvent={selectEvent}
              deleteEventId={deleteEvent}
            />
          );
        })}
      </Fragment>
    );
  }
}

export default EventList;
