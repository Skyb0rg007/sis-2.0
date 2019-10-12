

module.exports = {
    "courseListtoDayList": courseListtoDayList
}


// Given an array of classes, convert into array of arrays, for classes per day

/* Resulting format:
[
	[{name: class1, startTime: time1, endTime: time1}, {name: class2, startTime: time2, endTime: time2}] //(This is Monday)
	.
	.
	.
	[{name: class1, startTime: time1, endTime: time1}]  ] //(This is Friday)
*/

function courseListtoDayList(catalog) {

    var filtered = catalog.map(function (course) 
        {return course.sections.filter(function(section)
             {return section.instructor !== prof})})
    
    console.log(filtered)
    return filtered
}
