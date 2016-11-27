// BILLY

// PAGE 1
// ------

create (billyCase:Case {
    staffName: 'Polly', status: 'Open', phaseOfInvolvement: 'Referred',
    dateOpened: '2016-08-05',
    caseManager: 'Lauren Miller', familyFinderStaffName: 'Polly',
    // [PAGE 2] residential carer & allocated worker: Amber.
    //   decision maker in child protection: Liz Temple.
    //   another worker who gets on well with Billy: Wanda
    caseObjective: 'Find out about paternal family, increase contact with them'
    })

create (billy:Person {name: 'Billy Ward', givenNames: 'Billy', familyName: 'Ward', dateOfBirth: '2003-10-19',
    image: 'http://il2.picdn.net/shutterstock/videos/303445/thumb/1.jpg'})
create (billy)-[:SUBJECT {date: '2016-08-05'}]->(billyCase)

create (jenny:Person {name: 'Jenny Quinn', givenNames: 'Jenny', familyName: 'Quinn', atsi: false})
create (jenny)-[:FAMILY  {relationship: 'parent'}]->(billy)
// [PAGE 3] Jenny's siblings: Rowan, Philip, Helen

create (bob:Person {name: 'Bob Ward', givenNames: 'Bob', familyName: 'Ward', atsi: false})
create (bob)-[:FAMILY  {relationship: 'parent'}]->(billy)
// [PAGE 2] Billy says Jenny thinks Bob moved to SA

create (neighbour:Person {name: 'Unknown Neighbour', givenNames: 'Unknown', familyName: 'Neighbour'})
create (neighbour)-[:FRIEND {relationship: 'neighbour'}]->(billy) // sexually abused by his neighbour from the ages of 3 to 8 years of age.

create (joseph:Person {name: 'Joseph', givenNames: 'Joseph'})
create (joseph)-[:FAMILY {relationship: 'stepparent'}]->(billy)

create (denise:Person {name: 'Denise Quinn', givenNames: 'Denise', familyName: 'Quinn'})
create (denise)-[:FAMILY  {relationship: 'grandparent'}]->(billy)

// PAGE 2
// ------

create (chris:Person {name: 'Chris', givenNames: 'Chris'})
create (chris)-[:FAMILY {relationship: 'stepparent'}]->(billy)
// Chris's children: Jake, Jona

// PAGE 3
// ------

// ...




