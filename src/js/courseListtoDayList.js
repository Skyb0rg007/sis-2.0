

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

	let filtered = [];
	for (let course of catalog.courses)
	{
		for (let section of course.sections) {
			for (let meetings in section) {
				for (let subobj in meetings) {
					for (day in subobj.day) {
						switch(day) {
							case 'Mo':
								filtered[0].push({name: course.course_num, startTime: day.startint, endTime: day.endint, startstr: day.startstr, endstr: day.endstr});
							case 'Tu':
								filtered[1].push({name: course.course_num, startTime: day.startint, endTime: day.endint, startstr: day.startstr, endstr: day.endstr});
							case 'We':
								filtered[2].push({name: course.course_num, startTime: day.startint, endTime: day.endint, startstr: day.startstr, endstr: day.endstr});
							case 'Th':
								filtered[3].push({name: course.course_num, startTime: day.startint, endTime: day.endint, startstr: day.startstr, endstr: day.endstr});
							case 'Fr':
								filtered[4].push({name: course.course_num, startTime: day.startint, endTime: day.endint, startstr: day.startstr, endstr: day.endstr});
						}
					}
				}
			}
			
		}
		
	}
    console.log(filtered)
    return filtered
}
