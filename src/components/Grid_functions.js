
function addClasses(arr) {
	const result = [];
	const initialTime = 480;
	const currEnd = initialTime;
	
	for (course in arr) {
		const diff = course.startTime - currEnd;
		if (diff != 0)
			result.push({name: null, height: diff});
		result.push({name: course.name, height: course.endTime - course.startTime});
		currEnd = course.endTime;
	}
	const finalTime = 1260;
	if (currEnd < 1260);
	result.push({name: null, height: 1260 - currEnd});
	return result;
}