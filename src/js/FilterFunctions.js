

module.exports = {
    "blacklist": blacklist,
    "elim_days": elim_days,
    "time_constraint": time_constraint,
    "clean_empties": clean_empties,
    "print_courses": print_courses,
    "simplify": simplify
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
                    console.log()
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

function simplify(catalog) {

    var new_cat = catalog.map(course => {
        if (Array.isArray(course.sections)) {
            new_elem = {"course": course.title,
                        "instructor": course.sections[0].instructor}
            return new_elem;
        }
        else {
            return {};
        }})
    return new_cat
}


function blacklist(catalog, prof) {

    // var filtered = catalog.map(course => 
    //     {for (section of course.sections){
    //         section = section.filter(sect =>
    //             {return sect.instructor !== prof})
    //     }
    //     return course.sections})

    // return filtered;

    var filtered = catalog.filter(course =>
        course.sections[0][0].instructor != prof)

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


