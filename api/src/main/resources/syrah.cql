// SYRAH

// 25 May

create (syrahCase:Case {
    staffName: 'Marcus', status: 'Open', phaseOfInvolvement: 'Referred',
    dateOpened: '2016-10-05',
    caseManager: 'Stacey Ryan',
    familyFinderStaffName: 'Marcus Shearer',
    caseObjective: 'care for Syrah and Aiden, and maintain contact with Rowan and Kimmie and Brylee'
    })

create (syrah:Person {name: 'Syrah Ward', givenNames: 'Syrah', familyName: 'Ward', dateOfBirth: '2002-03-19',
    image: 'https://files.slack.com/files-pri/T03RTKHQG-F36M1HF2M/syrah_cropped.jpg'})
create (syrah)-[:SUBJECT {date: '2016-10-05'}]->(syrahCase)

create (kimmie:Person {name: 'Kimmie Charles', givenNames: 'Kimmie', familyName: 'Charles'})
create (kimmie)-[:FAMILY  {relationship: 'parent'}]->(syrah)

create (rowan:Person {name: 'Rowan Quinn', givenNames: 'Rowan', familyName: 'Quinn'})
create (rowan)-[:FAMILY  {relationship: 'parent'}]->(syrah)
// Connect to Billy case - this is the same Rowan

create (aiden:Person {name: 'Aiden', givenNames: 'Aiden'})
create (aiden)-[:FAMILY {relationship: 'brother'}]->(syrah)
//create (aiden)-[:SUBJECT {date: '2016-10-05'}]->(syrahCase)

create (brylee:Person {name: 'Brylee', givenNames: 'Brylee'})
create (brylee)-[:FAMILY {relationship: 'halfsister'}]->(syrah)

// 29 May

create (denise:Person {name: 'Denise Quinn', givenNames: 'Denise', familyName: 'Quinn'})
create (denise)-[:FAMILY  {relationship: 'grandparent'}]->(syrah)
// Connect to Billy case - this is the same Denise

create (sandra:Person {name: 'Sandra Charles', givenNames: 'Sandra', familyName: 'Charles'})
create (sandra)-[:FAMILY  {relationship: 'grandparent'}]->(syrah)

create (andy:Person {name: 'Andy Charles', givenNames: 'Andy', familyName: 'Charles'})
create (andy)-[:FAMILY  {relationship: 'grandparent'}]->(syrah)

create (donna:Person {name: 'Donna', givenNames: 'Donna'})
create (donna)-[:FAMILY  {relationship: 'aunt'}]->(syrah)

// ...
