module.exports = test


function test () {
    var cat = require('../../catalog_mini.json')

    var filters = require('./FilterFunctions.js')

    var courses = cat.courses;
    //var updated = funcs.blacklist(courses, "Kendra Field");

    let updated = filters.elim_days(courses, "Mo")
    updated = filters.clean_empties(updated)

    console.log(updated)
    //filters.print_courses(updated);


}
