import React, {useState, useContext, createContext} from 'react';
//import logo from './logo.svg';
import './Grid.css';
//import Theme from './contexts/test'

class Day extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="Day_box">
				Mon
				</div>
				<div className="Day_box">
				Tue
				</div>
				<div className="Day_box">
				Wed
				</div>
				<div className="Day_box">
				Thu
				</div>
				<div className="Day_box">
				Fri
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