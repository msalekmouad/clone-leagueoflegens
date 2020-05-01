import React,{Component} from "react"
import "./home.styles.css"

import {connect} from "react-redux"

//Components
import ChampionsGrid from "../../Components/Champions-grid/champions-grid.component"
import Modal from "../../Components/Modal/modal.component"

class Home extends Component{

    componentDidMount(){
        let lodoutSong = new Audio("/songs/loadout-song.mp3");
        //lodoutSong.play();
    }
    render(){

        let {show} = this.props;
        return(
            <div className="container-fluid vh-100 body p-0">
                {
                    show && <Modal />
                }
                <ChampionsGrid  />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    show: state.modal.show
})


export default connect(mapStateToProps,null)(Home);