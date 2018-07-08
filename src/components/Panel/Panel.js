import React, { Component } from 'react';
import Chat from '../Chat/Chat';
import Saved from '../Saved/Saved';
import './Panel.css';

class Panel extends Component {


  constructor(props) {
    super(props)
    this.state = {
      navState: 'popular',
      hidden: false,
    }
  }

  renderNavigation = () => {
    return (
      <div className='panel-navigation'>
        <div className="panel-navigation-links">
          <p className="panel-link" onClick={() => this.setState({ navState: 'popular' })}>Popular</p>
          <p>/</p>
          <p className="panel-link" onClick={() => this.setState({ navState: 'new' })}>New</p>
          <p>/</p>
          <p className="panel-link" onClick={() => this.setState({ navState: 'saved' })}>Saved</p>
          <p>/</p>
          <p className="panel-link" onClick={() => this.setState({ navState: 'chat' })}>Chat</p>
        </div>
        <div onClick={() => this.setState({ hidden: true })} className="panel-navigation-button">
          <i className="fas fa-angle-left"></i>
        </div>
      </div>
    )
  }

  renderContent = () => {
    if (this.state.navState === 'popular') return <p>Popular list</p>
    if (this.state.navState === 'new') return <p>new list</p>
    if (this.state.navState === 'saved') return <Saved />
    if (this.state.navState === 'chat') return <Chat />
  }

  renderHideArrow = () => {
    if (this.state.hidden) {
      return (<div  onClick={() => this.setState({ hidden: false })} className="panel-open-wrapper"><i className="fas fa-angle-right"></i></div>)
    } else {
      return <i onClick={() => this.setState({ hidden: true })} className="panel-closeIcon fas fa-angle-left"></i>
    }
  }

  renderPanel = () => {
    if (!this.state.hidden) return (
      <div className='panel-open'>
        {this.renderNavigation()}
        <div className="panel-content">
          {this.renderContent()}
        </div>
      </div>
    )
    else return (
      <div className='panel-closed'>
        {this.renderHideArrow()}
      </div>
    )
  }

  render() {
    return this.renderPanel()
  }
}

export default Panel;