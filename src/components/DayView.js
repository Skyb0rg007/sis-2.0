import React from 'react';
import PropTypes from 'prop-types';

const BLOCKS_PER_DAY = 15;

const DayView = ({ props: { courses }}) => {
    return (
        <ul>
            {courses.map(course => (
                <li>{course.name}: {course.startTime} - {course.endTime}</li>
            ))}
        </ul>
    );
}

DayView.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            courseName: PropTypes.string,
            startTime: PropTypes.number,
            endTime: PropTypes.number,
            courseNumber: PropTypes.string
        })
    )
}

export default DayView;