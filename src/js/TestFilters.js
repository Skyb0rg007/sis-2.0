module.exports = test


function test () {
    var cat = require('../../catalog_mini.json')

    var filters = require('./FilterFunctions.js')

    var courses = cat.courses;
    let  updated = filters.blacklist(courses, "Jayanthi Mistry");

    //let updated = filters.elim_days(courses, "Mo")
    //updated = filters.clean_empties(updated)

    console.log(updated)
    //filters.print_courses(updated);


}
