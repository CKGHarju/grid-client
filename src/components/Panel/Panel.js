import React, { Component } from 'react';
import './Panel.css'

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
      <div className='renderNavigation'>
        <p className='buttonHover' onClick={() => this.setState({navState: 'popular'})}>Popular</p>
        <p>/</p>
        <p className='buttonHover' onClick={() => this.setState({navState: 'new'})}>New</p>
        <p>/</p>
        <p className='buttonHover' onClick={() => this.setState({navState: 'saved'})}>Saved</p>
        <p>/</p>
        <p className='buttonHover' onClick={() => this.setState({navState: 'chat'})}>Chat</p>
      </div>
    )
  }

  renderContent = () => {
    if (this.state.navState === 'popular') return <p>poplar list</p>
    if (this.state.navState === 'new') return <p>new list</p>
    if (this.state.navState === 'saved') return <p>saved list</p>
    if (this.state.navState === 'chat') return <p>chat list</p>
  }

  renderHideArrow = () => {
    if (this.state.hidden) {
      return <i onClick={() => this.setState({hidden: false})} className="openArrow fas fa-long-arrow-alt-right"></i>
    } else {
      return <i onClick={() => this.setState({hidden: true})} className="closeArrow fas fa-long-arrow-alt-left"></i>
    }
  }

  renderPanel = () => {
    if (!this.state.hidden) return (
      <div className='renderPanelOpen'>
        {this.renderHideArrow()}
        {this.renderNavigation()}
        {this.renderContent()}
      </div>
    ) 
    else return (
      <div className='renderPanelClosed'>
        {this.renderHideArrow()}
      </div>
    )
  }

  render () {
    return this.renderPanel()
  }
}

export default Panel;