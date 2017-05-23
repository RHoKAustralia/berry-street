MATCH (n)
DETACH DELETE n

CREATE (maggie:Person {givenNames: 'Maggie', familyName: 'Simpson', dateOfBirth: '1987-04-19'})
CREATE (lisa:Person {givenNames: 'Lisa', familyName: 'Simpson', dateOfBirth: '1987-04-19'})
CREATE (bart:Person {givenNames: 'Bart', familyName: 'Simpson', dateOfBirth: '1987-04-19'})
CREATE (marge:Person {givenNames: 'Marge', familyName: 'Simpson', dateOfBirth: '1987-04-19'})
CREATE (homer:Person {givenNames: 'Homer', familyName: 'Simpson', dateOfBirth: '1987-04-19'})

CREATE (milhouse:Person {givenNames: 'Milhouse', familyName: 'Van Houten', dateOfBirth: '1987-04-19'})
CREATE (ralph:Person {givenNames: 'Ralph', familyName: 'Wiggum', dateOfBirth: '1987-04-19'})
CREATE (willie:Person {givenNames: 'Groundskeeper', familyName: 'Willie', dateOfBirth: '1987-04-19'})
CREATE (nelson:Person {givenNames: 'Nelson', familyName: 'Muntz', dateOfBirth: '1987-04-19'})
CREATE (patty:Person {givenNames: 'Patty', familyName: 'Bouvier', dateOfBirth: '1987-04-19'})
CREATE (ned:Person {givenNames: 'Ned', familyName: 'Flanders', dateOfBirth: '1987-04-19'})

CREATE(simpsonCase:Case {staffName:   'staff1', status: 'Open', phaseOfInvolvement: 'Referred',
                         dateOpened:  '2016-08-05',
                         caseManager: 'Jen', familyFinderStaffName: 'Dolores', caseObjective: 'test Neo4J'})

CREATE (homer)-[:CONNECTION {relationship: 'Parent'}]->(maggie)
CREATE (homer)-[:CONNECTION {relationship: 'Parent'}]->(lisa)
CREATE (homer)-[:CONNECTION {relationship: 'Parent'}]->(bart)
CREATE (marge)-[:CONNECTION {relationship: 'Parent'}]->(maggie)
CREATE (marge)-[:CONNECTION {relationship: 'Parent'}]->(lisa)
CREATE (marge)-[:CONNECTION {relationship: 'Parent'}]->(bart)
CREATE (homer)-[:CONNECTION {relationship: 'Partner'}]->(marge)
CREATE (patty)-[:CONNECTION {relationship: 'Aunt'}]->(maggie)
CREATE (patty)-[:CONNECTION {relationship: 'Aunt'}]->(lisa)
CREATE (patty)-[:CONNECTION {relationship: 'Aunt'}]->(bart)

CREATE (milhouse)-[:CONNECTION {relationship: 'Friend'}]->(bart)
CREATE (ralph)-[:CONNECTION {relationship: 'Friend'}]->(lisa)
CREATE (willie)-[:CONNECTION {relationship: 'Uncle'}]->(bart)
CREATE (nelson)-[:CONNECTION {relationship: 'Friend'}]->(bart)
CREATE (ned)-[:CONNECTION {relationship: 'Neighbour'}]->(homer)

CREATE (bart)-[:SUBJECT {date: '2016-08-05'}]->(simpsonCase)
