





export function blacklist(data, prof) {
    var courses = Object.values(data)

    filtered = courses.map(function (course) 
        {course.sections.filter(function(section)
            {section.instructor != prof})})
    
    console.log(filtered)
    return filtered
}

