import json

with open('data.json','r+') as f:
	data = json.load(f)

reformatted = {}
class_num = 0
for classes in data['searchResults']:
	class_ = {}
	class_['title'] = classes['course_title']
	class_['course_num'] = classes['course_num']
	sections_ = []
	for sections in classes['sections']:
		components_ = []
		for components in sections['components']:
			secs = {}
			class_['attr'] = components['class_attr']
			secs['secsnum'] = components['section_num']
			for locations in components['locations']:
				secs['instructor'] = locations['instructor']

				for meetings in locations['meetings']:
					mtg = meetings['mtg_num']
					secs[mtg] = {}
					secs[mtg]['day'] = meetings['days']
					secs[mtg]['startint'] = meetings['meet_start_min']
					secs[mtg]['endint'] = meetings['meet_end_min']
					secs[mtg]['startstr'] = meetings['meet_start']
					secs[mtg]['endstr'] = meetings['meet_end']

			components_.append(secs)
		sections_.append(components_)
	class_['sections'] = sections_
	reformatted[class_num] = class_
	class_num = class_num + 1

reformatted = json.dumps(reformatted)

output = open("data3.json", "w+")
output.write(reformatted)

#print(reformatted)