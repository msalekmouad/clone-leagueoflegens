import React,{Component} from "react"
import "./champion.styles.css"
import {connect} from "react-redux"

//actions
import {selectChamp} from "../../redux/champions/champions.action"

class ChampionCard extends Component{

    componentDidMount(){
        let {data, selectedChamp} = this.props;
        if(data.id === selectedChamp.id){
            console.log(data);
            console.log(selectedChamp);
        }
    }

    render(){
        let {data, selectedChamp,selectChamp} = this.props;

        return(
            <div className={`champ-card `}>
                <div className={`champ-image ${data.id === selectedChamp.id ? 'active' : ''}`} onClick={() => selectChamp(data)}>
                    <img alt={data.name} src={data.image} />
                </div>
                <span className="champ-name" color="white">
                    {data.name}
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedChamp: state.champions.selected_champ
})

const mapDispatchToProps = (dispatch) => ({
    selectChamp: (champ) => dispatch(selectChamp(champ))
})



export default connect(mapStateToProps,mapDispatchToProps)(ChampionCard);