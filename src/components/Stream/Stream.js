import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Stream.css';

class Stream extends Component {

  constructor (props) {
    super(props);
    this.state = {
      stream: '',
      type: '',
      showTypes: false,
      showForm: false,
      value: '',
    }
  }

  componentDidMount() {
    if (this.props.channel) {
      this.setState({stream: this.props.channel, type: this.props.type})
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = async (event) => {
    if (this.props.addStream) this.props.addStream();
    await event.preventDefault();
    if (this.state.type === 'youtube') {
      await this.setState({stream: this.state.value.split('?v=')[1]});
    } else if (this.state.type === 'facebook') {
      await this.setState({stream: this.state.value.split('/videos/')[1]});
    } else if (this.state.type === 'twitch') {
      if (this.state.value.includes('twitch.tv')) {
        await this.setState({stream: this.state.value.split('twitch.tv/')[1]});
      } else {
        await this.setState({stream: this.state.value});
      }
    }
    await this.props.updateStreams({type: this.state.type, linkURL: this.state.stream});
  }

  renderStream = () => {
    let url = '';
    switch (this.state.type) {
      case 'youtube':
        url = "https://www.youtube.com/embed/" + this.state.stream;
        break;
      case 'twitch':
        url = "http://player.twitch.tv/?channel=" + this.state.stream;
        break;
      case 'facebook':
        url = "https://www.facebook.com/video/embed?video_id=" + this.state.stream;
    }

    return (
      <div className='singleStreamContainer'>
        <iframe className='iframe'
          src={url}
          height="300"
          width="450"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
        <i onClick={() => this.setState({stream: '', type: '', showTypes: false, showForm: false, value: ''})} className="removeStream fas fa-times"></i>
      </div>

    )
  }


  renderLogic = () => {
    if (this.state.stream === '') {
      return this.renderAdd()
    } else {
      // if (this.props.addStream) this.props.addStream();
      return this.renderStream();
    }
  }

  renderStreamInputType = () => {
    if (this.state.type === 'twitch') return <p>Channel name or url</p>
    if (this.state.type === 'youtube') return <p>Youtube url</p>
    if (this.state.type === 'facebook') return <p>Facebook live url</p>
  }

  renderPlaceholder = () => {
    if (this.state.type === 'twitch') return "e.g: Ninja"
    if (this.state.type === 'youtube') return "e.g: www.youtube.com/watch?v=RtU_mdL2vBM"
    if (this.state.type === 'facebook') return "e.g: www.facebook.com/grid/videos/3013206958721394/"
  }

  renderAdd = () => {
    if (this.state.showForm) {
      return (
        <div>
          <form className='renderAddForm' onSubmit={this.handleSubmit}>
            <label className='renderAddLabel'>
              {this.renderStreamInputType()}
              <input placeholder={this.renderPlaceholder()} className='renderAddInput' type="text" value={this.state.value} onChange={this.handleChange} autoFocus/>
            </label>
            <input className='renderAddSubmit' type="submit" value="Save"/>
          </form>
          <button onClick={() => this.setState({showForm: false})}>back</button>
        </div>
      )
    }

    if (!this.state.showTypes && !this.state.showForm) return (
      <div className='logolist'>
        <i onClick={() => this.setState({showTypes: true})} className="renderAddLogo fas fa-plus"></i>
      </div>
    )
    if (this.state.showTypes) return (
      <div className='logolist' style={{display: 'flex', justifyContent: 'space-around', fontSize: '70px', paddingTop: '100px'}}>
        <i className="streamLogo fab fa-twitch" onClick={() => this.setState({type: 'twitch', showForm: 'true'})}></i>
        <i className="streamLogo fab fa-youtube" onClick={() => this.setState({type: 'youtube', showForm: 'true'})}></i>
        <i className="streamLogo fab fa-facebook" onClick={() => this.setState({type: 'facebook', showForm: 'true'})}></i>
      </div>
    )

  }

  render () {
    let ret;
    if ( this.state.stream === '' && !this.props.editStateReducer.editing) {
      ret = null;
    } else {
      ret =
      <div className='streamContainer'>
        {this.renderLogic()}
      </div>;
    }
    return ret;
  }
}

const mapStateToProps = (state) => ({
  editStateReducer: state.editStateReducer
});

const mapDispatchToProps = (dispatch) => ({
  updateStreams: (stream) => dispatch({
    type: 'SAVE_STREAMS',
    streamsdata: stream,
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Stream);