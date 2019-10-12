
export default function addClasses(arr) {
	const result = [];
	const initialTime = 480;
	const finalTime = 1260;
	const maxHeight = finalTime - initialTime;

	var currEnd = initialTime;
	
	for (var course of arr) {
		const diff = course.startTime - currEnd;
		console.log(course);
		console.log(diff);
		if (diff != 0)
			result.push({name: null, height: diff});
			result.push({name: course.name, height: .8*(course.endTime - course.startTime) });
		currEnd = course.endTime;
	}
	if (currEnd < finalTime);
	result.push({name: null, height: .8*(finalTime - course.endTime)});
	return result;
}