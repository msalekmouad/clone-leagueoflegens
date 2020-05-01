import React,{Component} from "react"
import "./champions-grid.styles.css"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {Animated} from "react-animated-css";


//components
import ChampionCard from "../../Components/Champion/champion.component"

//actions
import {setModalMessage,setModalStatus} from "../../redux/modal/modal.action";


class ChampionsGrid extends Component{


    lockIn= () =>{
        let {selectedChamp,setModalMessage,setModalStatus} = this.props;

        if(selectedChamp === ""){
            setModalMessage({
                title: "Select your champ",
                message: "Please select a champ by clicking one of those images above!"
            });
            setModalStatus(true);
        }else{
            this.props.history.push("matching")
        }
    }

    render(){
       let {championsList} = this.props;
        return(
                <div className="row no-gutters h-100  align-items-center justify-content-center">
                    <div className="col-lg-8  d-flex align-items-center justify-content-center">
                        <Animated animationIn="bounceInDown" animationOut="bounceInUp" animationInDelay="500" isVisible={true}>
                            <div className="champ-grid ">
                                {
                                    championsList && championsList.map((data,i) => <Animated animationIn="fadeIn"  animationInDelay={i*100} ><ChampionCard key={data.id} data={data} /></Animated>)
                                }
                                <div className="grid-footer"> 
                                    <button className="button is-primary is-tiny" onClick={this.lockIn}>lock in</button>
                                </div>
                            </div>
                        </Animated>

                    </div>
                </div>
            
        )
    }
}

const mapStateToProps = state => ({
    championsList: state.champions.champions_list,
    selectedChamp: state.champions.selected_champ
})

const mapDispatchToProps = (dispatch) => ({
    setModalMessage: (info) => dispatch(setModalMessage(info)),
    setModalStatus: (status) => dispatch(setModalStatus(status)),
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ChampionsGrid));