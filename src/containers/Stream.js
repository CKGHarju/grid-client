import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stream extends Component {

  constructor (props) {
    super(props);
    this.state = {
      stream: '',
      type: '',
      showTypes: false,
      showForm: false,
      value: '',
      streams: [],
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = async (event) => {
    await event.preventDefault();
    await this.setState({stream: this.state.value});

    await this.setState({streams: [...this.state.streams, `http://player.twitch.tv/?channel=${this.state.value}`] });
    await this.props.updateStreams(this.state.streams);
  }

  renderStream = () => {
    return (
      <iframe
        src={"http://player.twitch.tv/?channel=" + this.state.stream}
        height="300"
        width="400"
        frameborder="<frameborder>"
        scrolling="no"
        allowfullscreen="true">
      </iframe>
    )
    
  }

  renderLogic = () => {
    if (this.state.stream === '') {
      return this.renderAdd()
    } else {
      return this.renderStream()
    }
  }

  renderAdd = () => {
    if (this.state.showForm) {
      if (this.state.type === 'twitch') return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Channel:
            <input type="text" value={this.state.value} onChange={this.handleChange} autoFocus/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      )      
    }

    if (!this.state.showTypes && !this.state.showForm) return (
      <div className='logolist' style={{
        paddingTop: '100px',
        }}>
        <i onClick={() => this.setState({showTypes: true})} style={{color: 'white', fontSize: '90px', cursor: 'pointer'}} className="fas fa-plus"></i>;
      </div>
    )
    if (this.state.showTypes) return (
      <div className='logolist' style={{display: 'flex', justifyContent: 'space-around', fontSize: '70px', paddingTop: '100px'}}> 
        <i className="fab fa-twitch" onClick={() => this.setState({type: 'twitch', showForm: 'true'})} style={{color: 'rgb(100, 65, 164)', cursor: 'pointer'}}></i>
        <i className="fab fa-youtube" onClick={() => this.setState({type: 'youtube', showForm: 'true'})} style={{color: 'rgb(255, 0, 0)', cursor: 'pointer'}}></i>
        <i className="fab fa-facebook" onClick={() => this.setState({type: 'facebook', showForm: 'true'})} style={{color: 'rgb(59, 89, 152)', cursor: 'pointer'}}></i>
      </div>
    )
    
  }


  render () {
    return (
      <div style={{
        height: '300px',
        width: '400px',
        background: 'rgb(192,192,192)',
        position: 'relative',
        margin: '30px',
      }}>
        {this.renderLogic()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  updateStreams: (streams) => dispatch({
    type: 'SAVE_STREAMS',
    streamsdata: streams,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);