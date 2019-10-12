/* Course Card
 * displays course search results
 * Camille Calabrese
 * Polyhack 2019
 */

import React from 'react'

const CourseCard = (props) => (
    <div className="course-card">
      <div className="course-card__content">
        <h3 className="course-card-content__title">{props.title}</h3>
        <p className="course-card-content__coursenum">{props.coursenum}</p>
        <p className="course-card-content__prof">{props.prof}</p>
        <p className="course-card-content__time">{props.time}</p>
      </div>
    </div>
);

export default CourseCard