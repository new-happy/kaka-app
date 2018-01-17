import React, { Component } from 'react'
import './app.css'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import HomePage from '../HomePage/HomePage'
import City from '../City/City'
import Comments from '../Comments/Comments'
import TheTask from '../TheTask/TheTask'
import SubmitTask from '../SubmitTask/SubmitTask'
import LookFor from '../LookFor/LookFor'
import InforMation from '../InforMation/InforMation'
import Card from '../Card/Card.js'
import BusinessCard from '../BusinessCard/BusinessCard'
import Account from '../Account/Account'
import Integral from '../Integral/Integral'
import Feedback from '../Feedback/Feedback'
import About from '../About/About'
import SetUp from '../SetUp/SetUp'
import MyCard from '../MyCard/MyCard'
import SetPassword from '../SetPassword/SetPassword'
import Detailed from '../Detailed/Detailed'
import News from '../News/News'
import System from '../System/System'
import Chat from '../Chat/Chat'
import Cash from '../Cash/Cash'
import Balance from '../Balance/Balance'
import Release from '../Release/Release'
import OrderOne from '../OrderOne/OrderOne'
import OrderTow from '../OrderTwo/OrderTwo'
import Newproblem from '../Newproblem/Newproblem'
import {
  HashRouter as Router,Switch,
  Route
 } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/home-page' component={HomePage} />
            <Route path='/city' component={City} />
            <Route path='/release' component={Release} />
            <Route path='/comments' component={Comments} />
            <Route path='/the-task/:id' component={TheTask} />
            <Route path='/submit-task' component={SubmitTask} />
            <Route path='/look-for' component={LookFor} />
            <Route path='/news/system' component={System} />
            <Route path='/news/chat' component={Chat} />
            <Route path='/news' component={News} />
            <Route path='/card/set-up/set-password' component={SetPassword} />
            <Route path='/infor-mation/:id' component={InforMation} />
            <Route path='/card/account/balance/order-one' component={OrderOne} />
            <Route path='/card/account/cash/order-two' component={OrderTow} />
            <Route path='/card/account/balance' component={Balance} />
            <Route path='/card/account/cash' component={Cash} />
            <Route path='/card/account/newproblem' component={Newproblem} />
            <Route path='/card/account/detailed' component={Detailed} />
            <Route path='/card/account' component={Account} />
            <Route path='/card/integral' component={Integral} />
            <Route path='/card/feedback' component={Feedback} />
            <Route path='/card/about' component={About} />
            <Route path='/card/set-up' component={SetUp} />
            <Route path='/card/my-card' component={MyCard} />
            <Route path='/business-card/:id' component={BusinessCard} />
            <Route path='/card' exact component={Card} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
