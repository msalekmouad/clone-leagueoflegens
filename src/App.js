import React, {Component} from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from "react-redux"
import {champions_list} from "./assets/champions"
import _ from "lodash"
import {Animated} from "react-animated-css";


//pages
import Home from "./Pages/Home/home.component"
import MatchMaking from "./Pages/MatchMaking/match-making.component"

//actions
import {setChampions} from "./redux/champions/champions.action"

class App extends Component{
  

  componentDidMount(){
    this.props.setChampions(_.shuffle(champions_list))
  }
  
  
  render(){

    let {selectedChamp} = this.props;
    return (
      <div className="App vh-100 m-0 ">
        <Switch>
            <Route exact path="/" component={Home}/>
            {(selectedChamp !== "") ? <Route exact path="/matching" component={MatchMaking} /> : <Redirect to="/" />}
          </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedChamp: state.champions.selected_champ
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  setChampions: data => dispatch(setChampions(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
