import React, { Component } from 'react';
import Chat from './Chat'


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
      <div style={{fontSize: '18px', width: '300px', display: 'flex', justifyContent: 'space-between', paddingRight: '15px', paddingLeft: '15px', background: 'rgb(30,30,30)'}}>
        <p className='buttonHover' style={{}} onClick={() => this.setState({navState: 'popular'})}>Popular</p>
        <p>/</p>
        <p className='buttonHover' onClick={() => this.setState({navState: 'new'})}>New</p>
        <p>/</p>
        <p className='buttonHover' onClick={() => this.setState({navState: 'chat'})}>Chat</p>
      </div>
    )
  }

  renderContent = () => {
    if (this.state.navState === 'popular') return <p>poplar list</p>
    if (this.state.navState === 'new') return <p>new list</p>
    if (this.state.navState === 'chat') return <Chat />
  }

  renderHideArrow = () => {
    if (this.state.hidden) {
      return <i style={{color: 'rgb(30,30,30)', fontSize: '50px', cursor: 'pointer', background: 'black', paddingLeft: '5px'}} onClick={() => this.setState({hidden: false})} class="fas fa-long-arrow-alt-right"></i>
    } else {
      return <i style={{color: 'white', fontSize: '50px', cursor: 'pointer', background: 'black', paddingLeft: '150px'}} onClick={() => this.setState({hidden: true})} class="fas fa-long-arrow-alt-left"></i>
    }
  }

  renderPanel = () => {
    if (!this.state.hidden) return (
      <div style = {{
        color: 'white',
        background: 'black', 
        height: '95vh',
        borderRight: '2px solid rgb(30,30,30)'
      }}>
        {this.renderHideArrow()}
        {this.renderNavigation()}
        {this.renderContent()}
      </div>
    ) 
    else return (
      <div style = {{
        color: 'white',
        background: 'black', 
        height: '95vh'
      }}>
        {this.renderHideArrow()}
      </div>
    )
  }

  render () {
    return this.renderPanel()
  }
}

export default Panel;