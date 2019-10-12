import React, { useState, useContext, createContext } from 'react';
//import logo from './logo.svg';
import './Grid.css';
import PropTypes from 'prop-types'
//import Theme from './contexts/test'
import { Alert, Container, Row, Col } from 'react-bootstrap'
import addClasses from './Grid_functions.js'

const Week = ({ courses }) => {
	const style = {
		height: '735px',
		width: '19%',
		border: '1px solid #AAA',
		display: 'grid',
		textAlign: 'center'
	}
	const days = [
		'Mon',
		'Tue',
		'Wed',
		'Thu',
		'Fri'
	];
	return (
		<Container fluid={true}>
			<Row md="1">
				{days.map(day => (
					<Col>
						<Alert variant='info'>
							{day}
						</Alert>
					</Col>
				)
				)}
			</Row>
			<Row md="1">
				{days.map(day => (
					<Col>
						<Day courses={courses[day]} />
					</Col>
				))}
			</Row>
		</Container>
	)
}
Week.propTypes = {
	courses: PropTypes.object
}

// class Blah extends React.Component {
// 	render() {
// 		const type = this.props.value.name;
// 		if (type === null) {
// 			return (
// 				<div className="onCalendar" style={{ backgroundColor: "#DDDDDD", height: this.props.value.height }}>
// 					{this.props.value.name}
// 				</div>
// 			);
// 		} else {
// 			return (
// 				<div className="onCalendar" style={{ backgroundColor: "#004488", height: this.props.value.height }}>
// 					{this.props.value.name}
// 				</div>
// 			);
// 		}
// 	}
// }

class Grid extends React.Component {

	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Week />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}

}

// export default Grid

const Day = ({ courses }) => {
	const dayStyle = {
		display: 'grid',
		gridGap: '0px',
		height: '600px',
		backgroundColor: 'lightblue'
	};
	return (
		<div style={dayStyle}>
			{!courses ? <p>NULL!</p> : courses.map(course => {
				const courseStyle = {
					gridRow: `${course.startTime - 420} / ${course.endTime - 420}`,
					backgroundColor: 'lavender',
					textAlign: 'center'
				};
				return (
					<div style={courseStyle}>
						<Container>
							<Row>{course.name}</Row>
							<Row>{(course.startTime)} - {(course.endTime)}</Row>
						</Container>
					</div>
				)
			})}
		</div>
	);
}
Day.propTypes = {
	courses: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		startTime: PropTypes.number,
		endTime: PropTypes.number
	}))
}

const Test = () => {
	const courses = [{ name: "Math-145", startTime: 485, endTime: 680 }, { name: "Comp-170", startTime: 900, endTime: 1260 }];
	return (
		<div style={{ height: "735px", display: "grid" }}>
			<Week courses={{ Mon: courses }} />
		</div>
	)
}

export default Test;