import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Saved.css';
import { Link } from 'react-router-dom';
import SERVER_URL from '../../config';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridUrl: '',
    }
  }

  componentDidMount() {
    console.log(this.props.grids);
  }

  renderGrids = () => {
    if (!this.props.grids) return;
    return this.props.grids.map((grid,i) => {
      return (
        <div className='savedGrids' key={i} >
          <div className='savedGridsInfo'>
            <p className='gridName' >{grid.name}</p>
            <a className='gridURL' href={`/${grid.URL}`}>{grid.URL}</a>
          </div>
          <i onClick={() => this.deleteGrid(grid.URL)} className="fas fa-trash"></i>
        </div>
      )
    })
  }

  //create refetch

  deleteGrid = (url) => {
    fetch(SERVER_URL + '/deleteGrid', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'Application/JSON',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      },
      body: JSON.stringify({URL: url})
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
    })
  }

  render () {
    return (
      <div>
        <h4>My Grids</h4>
        <div className='savedGridsContainer'>
          {this.renderGrids()}
        </div>
        
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  grids: state.userdata.grids,
});

const mapDispatchToProps = (dispatch) => ({
  updateUserData: (user) => dispatch({
    type: 'USER_DATA',
    userdata: user
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Saved);