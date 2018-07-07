import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Modal from 'react-modal';
import './SaveButton.css';


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
    // axios.post('http://...', JSON.parse(data))
    //   .then(res => console.log(res.data))
    //   .catch(err => console.log(err.message))
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = async (event) => {
    await event.preventDefault();
    axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    await axios.post('http://192.168.1.241:3631/saveGrid', {name: this.state.value, videos: this.props.streamsdata})
            .then(res => console.log('response for Post:', res));
    await this.setState({modalIsOpen: false});
  }


  closeModal = () =>  {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div>
        <button onClick={this.getStreams}>Save Your Grid</button>
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

// const mapDispatchToProps = (dispatch) => ({

// })

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
export default connect(mapStateToProps, null)(SaveButton);

