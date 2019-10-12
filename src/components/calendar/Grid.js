import React, { useState, useContext, createContext } from 'react';
//import logo from './logo.svg';
import './Grid.css';
//import Theme from './contexts/test'
import { Alert } from 'react-bootstrap'
import addClasses from './Grid_functions.js'



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
					<div className="real-class">
						<ClassDiv />
					</div>
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

class Blah extends React.Component {	
	render() {
		const type = this.props.value.name;
		if (type === null) {
			return (
				<div style={{backgroundColor: "#DDDDDD", height: this.props.value.height}}>
					{this.props.value.name}
				</div>
			);
		} else {
			return (
				<div style={{backgroundColor: "#226688", height: this.props.value.height}}>
					{this.props.value.name}
				</div>
			);
		}
	}
}


class ClassDiv extends React.Component {
	
	renderBlah(i) {
		return <Blah value={i} />;
	}
	createDay = () => {
		const classes = [{name: "Math-145", startTime: 485, endTime: 680}, {name: "Comp-170", startTime: 900, endTime: 1260}];
		var divheights = addClasses(classes);
		console.log(divheights);
		const daysched = [];
		for (const i in divheights) {
			daysched.push(this.renderBlah(divheights[i]));
		}
		return daysched;
	}
	render() {
		return (
			<div>
			
			{this.createDay()}
			</div>
		);
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