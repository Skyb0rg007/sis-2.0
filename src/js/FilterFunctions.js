

module.exports = {
    "blacklist": blacklist,
    "elim_days": elim_days,
    "time_constraint": time_constraint,
    "clean_empties": clean_empties,
    "print_courses": print_courses
}


function clean_empties(catalog) {
    return catalog.filter(course => {
        return (course.sections[0] != undefined)})
}

function print_courses(catalog) {
    if (Array.isArray(catalog)) {
        catalog.map(course => {
            if (Array.isArray(course.sections)) {
                console.log(course.title)
                course.sections[0].map(function (sect) {
                    console.log(sect.instructor);
                    return sect;
                })
            }
        return course; 
        })
    }
    else{
        console.log("bruh")
    }
}


function blacklist(catalog, prof) {

    var filtered = catalog.map(course => 
        {for (section of course.sections){
            section = section.filter(section =>
                {return section.instructor !== prof})
        }
        return course.sections})

    return filtered;
}


function time_constraint(catalog, start, end){
    return catalog
}

function elim_days(catalog, bad_days) {
    var filtered = catalog.map(function (course)
        {return course.sections[0].filter(function(sect)
            {var keep = true;
                for (day in bad_days){
                    if (sect.days.includes(day)){
                        keep = false;
                    }
                }
                return keep})})
    print_courses(filtered);
    return filtered;
}


