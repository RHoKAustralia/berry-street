// SYRAH

// 25 May

create (syrahCase:Case {
    staffName: 'Marcus', status: 'Open', phaseOfInvolvement: 'Referred',
    dateOpened: '2016-10-05',
    caseManager: 'Stacey Ryan',
    familyFinderStaffName: 'Marcus Shearer',
    caseObjective: 'care for Syrah and Aiden, and maintain contact with Rowan and Kimmie and Brylee'
    })

create (syrah:Person {name: 'Syrah Ward', dateOfBirth: '2002-03-19',
    image: 'http://q1065.fm/files/2013/05/Nicole11.jpg?w=600&h=0&zc=1&s=0&a=t&q=89'})
create (syrah)-[:SUBJECT {date: '2016-10-05'}]->(syrahCase)

create (kimmie:Person {name: 'Kimmie Charles'})
create (kimmie)-[:FAMILY  {relationship: 'parent'}]->(syrah)

create (rowan:Person {name: 'Rowan Quinn'})
create (rowan)-[:FAMILY  {relationship: 'parent'}]->(syrah)
// Connect to Billy case - this is the same Rowan

create (aiden:Person {name: 'Aiden'})
create (aiden)-[:FAMILY {relationship: 'brother'}]->(syrah)
//create (aiden)-[:SUBJECT {date: '2016-10-05'}]->(syrahCase)

create (brylee:Person {name: 'Brylee'})
create (brylee)-[:FAMILY {relationship: 'halfsister'}]->(syrah)

// 29 May

create (denise:Person {name: 'Denise Quinn'})
create (denise)-[:FAMILY  {relationship: 'grandparent'}]->(syrah)
// Connect to Billy case - this is the same Denise

create (sandra:Person {name: 'Sandra Charles'})
create (sandra)-[:FAMILY  {relationship: 'grandparent'}]->(syrah)

create (andy:Person {name: 'Andy Charles'})
create (andy)-[:FAMILY  {relationship: 'grandparent'}]->(syrah)

create (donna:Person {name: 'Donna'})
create (donna)-[:FAMILY  {relationship: 'aunt'}]->(syrah)

// ...
