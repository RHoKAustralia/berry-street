match (n) detach delete n

create (maggie:Person {name: 'Maggie Simpson', dateOfBirth: '1987-04-19'})
create (lisa:Person {name: 'Lisa Simpson', dateOfBirth: '1987-04-19'})
create (bart:Person {name: 'Bart Simpson', dateOfBirth: '1987-04-19'})
create (marge:Person {name: 'Marge Simpson', dateOfBirth: '1987-04-19'})
create (homer:Person {name: 'Homer Simpson', dateOfBirth: '1987-04-19'})

create (milhouse:Person {name: 'Milhouse Van Houten', dateOfBirth: '1987-04-19'})
create (ralph:Person {name: 'Ralph Wiggum', dateOfBirth: '1987-04-19'})
create (willie:Person {name: 'Groundskeeper Willie', dateOfBirth: '1987-04-19'})
create (nelson:Person {name: 'Nelson Muntz', dateOfBirth: '1987-04-19'})
create (patty:Person {name: 'Patty Bouvier', dateOfBirth: '1987-04-19'})
create (ned:Person {name: 'Ned Flanders', dateOfBirth: '1987-04-19'})

create (simpsonCase:Case {staffName: 'staff1', status: 'open', dateOpened: '2016-08-05', caseObjective: 'test Neo4J'})

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

