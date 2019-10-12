import json

with open('data.json','r+') as f:
	data = json.load(f)

reformatted = {}
class_num = 0
for classes in data['searchResults']:
	class_ = {}
	class_['title'] = classes['course_title']
	class_['course_num'] = classes['course_num']
	for sections in classes['sections']:
		holder = []
		for components in sections['components']:
			secs = {}
			class_['attr'] = components['class_attr']
			for locations in components['locations']:
				secs['instructor'] = locations['instructor']

				for meetings in locations['meetings']:
					secs['days'] = meetings['days']
					secs['start'] = meetings['meet_start']
					secs['end'] = meetings['meet_end']

			holder.append(secs)
		class_['sections'] = holder
	reformatted[class_num] = class_
	class_num = class_num + 1

reformatted = json.dumps(reformatted)
print(reformatted)