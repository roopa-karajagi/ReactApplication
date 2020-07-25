import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from "cuid";


const eventsFromDashboard= [
  {
    id: '1',  
    title: 'Trip to Tower of London',
    date: '2020-04-30',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2020-04-29',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

 class EventDashboard extends Component {

   state={
      events:eventsFromDashboard,
      isOpen:false,
      selectedEvent:null
   }
     /*If we are using normal function then we need to declare constructor and bind the methods in them using arrow we can get rid of that*/
     

     //We are making use of prev state here : prevState.isOpen
     //destructuring of this can be done here bcz prevState is also object {isOpen}=prevState
  //  handleIsOpenToggle = () =>
  //  {
  //    this.setState(({isOpen})=>({
  //      isOpen: !isOpen
  //    })
  //    )
  //  }
  handleCreateFromOpen=()=>{
    this.setState({
      isOpen:true,
      selectedEvent:null
    })
  }

  handleCancelFromOpen=()=>
  {
    this.setState({
      isOpen:false
    })
  }

handleCreateEvent=(newEvent)=>{
  newEvent.id = cuid();
  newEvent.hostPhotoURL="/assets/user.png";
this.setState(({events})=>({
  events:[...events,newEvent],
  isOpen:false
})
)
}
handleSelctedEvent=(evt,event)=>{
  console.log(event);
  console.log(evt);
this.setState({
  selectedEvent:event,
  isOpen:true
})
}

//Making use of prevState and adding it to the events
handleUpdateEvent=(updateEvent)=>
{
  console.log(updateEvent);
  this.setState(({events}) => (
    {
    events:events.map(event=>{
      if(event.id===updateEvent.id)
      {
        return  {...updateEvent}
      }
      else {
        return event
      }
    }),
    isOpen:false,
    selectedEvent:null
  })
  )
}

//Delete Events from list of events by checking eventid and deleted event id 
//filter== returns the elements which satisfy the condition and filters out other items in the array
//if id is same as deleteEventid then it will return that element

handleDeleteEvent=(deleteEventId)=>{
  this.setState(({events})=>({
      events:events.filter(e=>{
      return e.id !==deleteEventId
      })
  }))
}
    render() {
      const {events,isOpen,selectedEvent}=this.state;
        return (
           <Grid>
           <Grid.Column width={10}>
                <EventList 
                deleteEvent={this.handleDeleteEvent}
                selectEvent={this.handleSelctedEvent} 
                events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
        {/* Keeping things simple and navbar and dashboard doesn't have relationship and helpful in CRUD operation*/}
            <Button 
            onClick={this.handleCreateFromOpen} 
            positive 
            content="Create Event"></Button>
            {/* whetever isOpen true or false depends upon that EventForm will be executed 
            Need to use Key method of lifecycle to ensure the component renders whenever we reset the form */}
            {isOpen && <EventForm
              key={selectedEvent?selectedEvent.id:0}
              selectedEvent={selectedEvent}
              updateEvent={this.handleUpdateEvent}
                createEvent={this.handleCreateEvent} 
                cancelFormOpen={this.handleCancelFromOpen} />}
            </Grid.Column>
           </Grid>
        )
    }
}

export default EventDashboard;