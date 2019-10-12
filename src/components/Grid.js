import React, {useState, useContext, createContext} from 'react';
//import logo from './logo.svg';
import './Grid.css';
//import Theme from './contexts/test'
import {Alert} from 'react-bootstrap'

class Day extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="Times">
					<Alert variant='light'>
					</Alert>
				</div>
				<div className="Day_box">
					<Alert variant='info'>
					Mon
					</Alert>
				</div>
				<div className="Day_box">
					<Alert variant='info'>
					Tue
					</Alert>
				</div>
				<div className="Day_box">
					<Alert variant='info'>
					Wed
					</Alert>
				</div>
				<div className="Day_box">
					<Alert variant='info'>
					Thu
					</Alert>
				</div>
				<div className="Day_box">
					<Alert variant='info'>
					Fri
					</Alert>
				</div>
			</div>
		)
	}
	
}


class Grid extends React.Component {
	
	render() {
    return (
      <div className="game">
        <div className="game-board">
          <Day />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
	
}

export default Grid