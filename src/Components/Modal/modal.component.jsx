import React,{Component} from "react"
import {connect} from "react-redux"
import "./modal.styles.css"


//actions
import {setModalStatus} from "../../redux/modal/modal.action";


class Modal extends Component{

    render(){

        let {infos, changeModalStatus} = this.props;

        return(
                <div className="modal-container" >
                    <div className="modal">
                       <div className="modal-body">
                            <h3 className="modal-title">{
                                infos.title
                            }</h3>
                            <p className="modal-message">
                            {
                                infos.message
                            }
                            </p>
                       </div>

                       <div className="modal-footer">
                             <button className="button is-secondary" onClick={() => {
                                    changeModalStatus(false);
                                }}>Ok</button>
                       </div>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    infos: state.modal.infos
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    changeModalStatus: status => dispatch(setModalStatus(status))
})

export default connect(mapStateToProps,mapDispatchToProps)(Modal);