import "./App.css"; //todo rcc
import React, { Component } from "react";
import Navbar from './components/Navbar'
import News from "./components/News";
import{ BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  render() {
    return <Router>
              <div>
                  <Navbar/>
                  <Switch>
                    <Route exact  path="/"> <News  key="general" pageSize={this.pageSize} country="in" category="general" background="success"/></Route>                   
                    <Route exact  path="/business"> <News  key="bussiness" pageSize={this.pageSize} country="in" category="business" background="danger"/></Route>               
                    <Route exact  path="/entertainment"> <News key="entertainment"  pageSize={this.pageSize} country="in" category="entertainment" background="warning"/></Route>                   
                    <Route exact  path="/health"> <News key="health"  pageSize={this.pageSize} country="in" category="health" background="primary"/></Route>                   
                    <Route exact  path="/general"> <News key="general"  pageSize={this.pageSize} country="in" category="general" background="secondary"/></Route>                   
                    <Route exact  path="/science"> <News key="science"  pageSize={this.pageSize} country="in" category="science" background="dark"/></Route>                   
                    <Route exact  path="/sports"> <News key="sports"  pageSize={this.pageSize} country="in" category="sports" background="success"/></Route>                   
                    <Route exact  path="/technology"> <News key="technology"  pageSize={this.pageSize} country="in" category="technology" background="danger"/></Route>                   
                  </Switch>
                  
              </div>;
            </Router> 
  }
}
