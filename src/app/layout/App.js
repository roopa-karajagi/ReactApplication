import React,{Component, Fragment} from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/Nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import EventDetailed from '../../features/event/EventDetailed/EventDetailed';
import Home from '../../features/Home/Home';
import PeopleDashboard from '../../features/user/peopleDashboard/PeopleDashboard'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import userDetailedPage from '../../features/user/userDetailed/userDetailedPage'
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from "../../features/TestArea/TestComponent";


//keeping home page outside , to make it as seperate Route
class App extends Component {
  render(){
    return (
      <Fragment >
      <Route exact path="/" component={Home} />
      <Route path="/(.+)" render={()=>(
        <Fragment>
        <NavBar />
      <Container className="main">
      <Route path="/events" component={EventDashboard} />
      <Route path="/events/:id" component={EventDetailed} />
      <Route path="/people" component={PeopleDashboard} />
      <Route path="/settings" component={SettingsDashboard} />
      <Route path="/profile/:id" component={userDetailedPage} />
      <Route path="/createEvent" component={EventForm} />
      <Route path="/test" component={TestComponent} />
      </Container>
      </Fragment>
      )
    }/>
       </Fragment>
    );
  }
}
export default App;


