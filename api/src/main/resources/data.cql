match (n) detach delete n

create (maggie:Person {givenNames: 'Maggie', familyName: 'Simpson', dateOfBirth: '1987-04-19'})
create (lisa:Person {givenNames: 'Lisa', familyName: 'Simpson', dateOfBirth: '1987-04-19'})
create (bart:Person {givenNames: 'Bart', familyName: 'Simpson', dateOfBirth: '1987-04-19'})
create (marge:Person {givenNames: 'Marge', familyName: 'Simpson', dateOfBirth: '1987-04-19'})
create (homer:Person {givenNames: 'Homer', familyName: 'Simpson', dateOfBirth: '1987-04-19'})

create (milhouse:Person {givenNames: 'Milhouse', familyName: 'Van Houten', dateOfBirth: '1987-04-19'})
create (ralph:Person {givenNames: 'Ralph', familyName: 'Wiggum', dateOfBirth: '1987-04-19'})
create (willie:Person {givenNames: 'Groundskeeper', familyName: 'Willie', dateOfBirth: '1987-04-19'})
create (nelson:Person {givenNames: 'Nelson', familyName: 'Muntz', dateOfBirth: '1987-04-19'})
create (patty:Person {givenNames: 'Patty', familyName: 'Bouvier', dateOfBirth: '1987-04-19'})
create (ned:Person {givenNames: 'Ned', familyName: 'Flanders', dateOfBirth: '1987-04-19'})

create (simpsonCase:Case {staffName: 'staff1', status: 'Open', phaseOfInvolvement: 'Referred', dateOpened: '2016-08-05', caseManager: 'Jen', familyFinderStaffName: 'Dolores', caseObjective: 'test Neo4J'})

create (homer)-[:FAMILY  {relationship: 'Parent'}]->(maggie)
create (homer)-[:FAMILY  {relationship: 'Parent'}]->(lisa)
create (homer)-[:FAMILY  {relationship: 'Parent'}]->(bart)
create (marge)-[:FAMILY  {relationship: 'Parent'}]->(maggie)
create (marge)-[:FAMILY  {relationship: 'Parent'}]->(lisa)
create (marge)-[:FAMILY  {relationship: 'Parent'}]->(bart)
create (homer)-[:FAMILY {relationship: 'Partner'}]->(marge)
create (patty)-[:FAMILY {relationship: 'Aunt'}]->(maggie)
create (patty)-[:FAMILY {relationship: 'Aunt'}]->(lisa)
create (patty)-[:FAMILY {relationship: 'Aunt'}]->(bart)

create (milhouse)-[:FRIEND {relationship: 'Friend'}]->(bart)
create (ralph)-[:FRIEND {relationship: 'Friend'}]->(lisa)
create (willie)-[:FRIEND {relationship: 'Uncle'}]->(bart)
create (nelson)-[:FRIEND {relationship: 'Friend'}]->(bart)
create (ned)-[:FRIEND {relationship: 'Neighbour'}]->(homer)

create (bart)-[:SUBJECT {date: '2016-08-05'}]->(simpsonCase)
