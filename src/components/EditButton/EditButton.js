import React, { Component } from 'react';
import { connect } from 'react-redux';
import './EditButton.css';


class EditButton extends Component {

  toggleEditGrid = () => {
    this.props.editStateReducer()
  }
  render() {
    let button;

    if ( this.props.editState.editing ) button = <button className="editButton" onClick={this.toggleEditGrid}>Stop Editing Grid</button>;
    else button = <button className="editButton" onClick={this.toggleEditGrid}>Start Editing Grid</button>;
    return (
      <div>
        <div className="editButtonContainer">
          {button}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  editState: state.editStateReducer
});
const mapDispatchToProps = (dispatch)=>({
  editStateReducer: () => dispatch({
    type: 'TOGGLE_EDIT'
  })
});
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(EditButton);

