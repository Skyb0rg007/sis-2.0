



// takes the big data object and a list of functions
export function apply_filters(dataObj, functions) {
    var courses = Object.values(dataObj)
    
    for (var fun of functions){
        courses = fun(courses)
    }

}


export function blacklist(catalog, prof) {
    

    filtered = catalog.map(function (course) 
        {course.sections.filter(function(section)
            {section.instructor != prof})})
    
    console.log(filtered)
    return filtered
}

