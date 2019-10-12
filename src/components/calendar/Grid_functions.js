
export default function addClasses(arr) {
	const result = [];
	const initialTime = 480;
	var currEnd = initialTime;
	
	for (var course of arr) {
		const diff = course.startTime - currEnd;
		console.log(course);
		console.log(diff);
		if (diff != 0)
			result.push({name: null, height: diff});
		result.push({name: course.name, height: .8*(course.endTime - course.startTime)});
		currEnd = course.endTime;
	}
	const finalTime = 1260;
	if (currEnd < 1260);
	result.push({name: null, height: .8*(1260 - currEnd)});
	return result;
}