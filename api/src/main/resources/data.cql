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

create (homer)-[:FAMILY  {relationship: 'parent'}]->(maggie)
create (homer)-[:FAMILY  {relationship: 'parent'}]->(lisa)
create (homer)-[:FAMILY  {relationship: 'parent'}]->(bart)
create (marge)-[:FAMILY  {relationship: 'parent'}]->(maggie)
create (marge)-[:FAMILY  {relationship: 'parent'}]->(lisa)
create (marge)-[:FAMILY  {relationship: 'parent'}]->(bart)
create (homer)-[:FAMILY {relationship: 'partner'}]->(marge)
create (patty)-[:FAMILY {relationship: 'aunt'}]->(maggie)
create (patty)-[:FAMILY {relationship: 'aunt'}]->(lisa)
create (patty)-[:FAMILY {relationship: 'aunt'}]->(bart)

create (milhouse)-[:FRIEND {relationship: 'friend'}]->(bart)
create (ralph)-[:FRIEND {relationship: 'friend'}]->(lisa)
create (willie)-[:FRIEND {relationship: 'grounskeeper'}]->(bart)
create (nelson)-[:FRIEND {relationship: 'friend'}]->(bart)
create (ned)-[:FRIEND {relationship: 'neighbour'}]->(homer)

create (bart)-[:SUBJECT {date: '2016-08-05'}]->(simpsonCase)
