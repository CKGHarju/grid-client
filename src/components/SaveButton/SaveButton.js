import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Modal from 'react-modal';
import './SaveButton.css';
import SERVER_URL from '../../config';


class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      value: '',

    }
  }
  
  getStreams = () => {
    console.log(this.props.streamsdata);
    console.log(this.props.userdata);
    let data = {streams: this.props.streamsdata, user: this.props.userdata};
    console.log(data);
    this.setState({modalIsOpen: true});
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = async (event) => {
    let newgrids = [].concat(this.props.userdata.grids);
    await event.preventDefault();
    axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    await axios.post(SERVER_URL+ '/saveGrid', {name: this.state.value, videos: this.props.streamsdata})
            .then(res => newgrids.push(res.data.URL));
    await this.props.updateUserData({name: this.props.userdata.name, id: this.props.userdata.id, grids: newgrids})
    await this.setState({modalIsOpen: false});
  }


  closeModal = () =>  {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div>
        <div className="savebuttoncontainer">
          <button className="savebutton" onClick={this.getStreams}>Save Your Grid</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h3 className="titleModal" ref={subtitle => this.subtitle = subtitle}>Save Your Grid</h3>
          <form onSubmit={this.handleSubmit}>
            <input className="inputModal" type="text" value={this.state.value} onChange={this.handleChange}/>
            <input className="submitModal" type="submit" value="Save" />
          </form>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  streamsdata: state.streamsdata,
  userdata: state.userdata,
})

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (user) => dispatch({
    type: 'USER_DATA',
    userdata: user
  }),
})

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
export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);

