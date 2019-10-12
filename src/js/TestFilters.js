module.exports = test


function test () {
    var cat = require('../catalog_mini.json')
    console.log(cat)
    console.log()

    var funcs = require('./js/FilterFunctions.js/index.js')
    blacklist = funcs.blacklist

    var courses = cat.courses
    console.log(courses)
    var updated = blacklist(courses, "Kendra Field")
    console.log()
    console.log(updated)
    //console.log(updated)
}
