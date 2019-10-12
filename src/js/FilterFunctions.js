

module.exports = {
    "blacklist": blacklist
}

// takes the big data object and a list of functions
// not sure how to handle parameters
function apply_filters(dataObj, functions) {
    var courses = Object.values(dataObj)
    
    for (var fun of functions){
        courses = fun(courses)
    }

}


function blacklist(catalog, prof) {

    var filtered = catalog.map(function (course) 
        {return course.sections.filter(function(section)
             {return section.instructor !== prof})})
    
    console.log(filtered)
    return filtered
}




