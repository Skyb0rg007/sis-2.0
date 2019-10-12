module.exports = test


function test () {
    var cat = require('../../catalog.json')

    var filters = require('./FilterFunctions.js')

    var courses = cat.courses;

    filters.print_courses(courses)

    console.log();


    var updated = filters.blacklist(courses, "Mark Sheldon");

    //let updated = filters.elim_days(courses, "Mo")
    //updated = filters.clean_empties(updated)

    filters.print_courses(updated)
    //filters.print_courses(updated);


}
