import React from "react";
import { hot } from 'react-hot-loader/root';
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from './containers/Layout';

class App extends React.Component {    
   render() {   
      const { name } = this.props; 
      return (
         <>
         <Switch>
            <Redirect exact from="/" to="/app" />
            <Route path="/app" component={Layout} />
         </Switch>
         </>
      );
   }
}
export default hot(App);