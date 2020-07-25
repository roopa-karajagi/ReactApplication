import React from 'react'
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

const Home = ({history}) => {
    //there is history available from props so rather going from props.history.push()
    //we can use destructuring {history}=props
    return (
        <div>
               <Segment inverted textAlign='center' vertical className='masthead'>
               <Container text>
                 <Header as='h1' inverted>
                   <Image
                     size='massive'
                     src='/assets/logo.png'
                     alt='logo'
                     style={{ marginBottom: 12 }}
                   />
                   Re-vents
                 </Header>
                 <Button
                 onClick={()=>{
                    history.push("/events");
                 }} 
                 size='huge' inverted>
                   Get started
                   <Icon name='right arrow' inverted />
                 </Button>
               </Container>
             </Segment>
        </div>
    )
}

export default Home;