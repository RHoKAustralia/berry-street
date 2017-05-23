// BILLY

// PAGE 1
// ------

CREATE (billyCase:Case {
    staffName: 'Polly', status: 'Open', phaseOfInvolvement: 'Referred',
    dateOpened: '2016-08-05',
    caseManager: 'Lauren Miller', familyFinderStaffName: 'Polly',
    // [PAGE 2] residential carer & allocated worker: Amber.
    //   decision maker in child protection: Liz Temple.
    //   another worker who gets on well with Billy: Wanda
    caseObjective: 'Find out about paternal family, increase contact with them'
    })

CREATE (billy:Person {name:  'Billy Ward', givenNames: 'Billy', familyName: 'Ward', dateOfBirth: '2003-10-19',
                      image: 'http://il2.picdn.net/shutterstock/videos/303445/thumb/1.jpg'})
CREATE (billy)-[:SUBJECT {date: '2016-08-05'}]->(billyCase)

CREATE (jenny:Person {name: 'Jenny Quinn', givenNames: 'Jenny', familyName: 'Quinn', atsi: 'No'})
CREATE (jenny)-[:CONNECTION {relationship: 'parent'}]->(billy)
// [PAGE 3] Jenny's siblings: Rowan, Philip, Helen

CREATE (bob:Person {name: 'Bob Ward', givenNames: 'Bob', familyName: 'Ward', atsi: 'No'})
CREATE (bob)-[:CONNECTION {relationship: 'parent'}]->(billy)
// [PAGE 2] Billy says Jenny thinks Bob moved to SA

CREATE (neighbour:Person {name: 'Unknown Neighbour', givenNames: 'Unknown', familyName: 'Neighbour'})
CREATE(neighbour)-[:CONNECTION {
  relationship: 'neighbour'}]->(billy) // sexually abused by his neighbour from the ages of 3 to 8 years of age.

CREATE (joseph:Person {name: 'Joseph', givenNames: 'Joseph'})
CREATE (joseph)-[:CONNECTION {relationship: 'stepparent'}]->(billy)

CREATE (denise:Person {name: 'Denise Quinn', givenNames: 'Denise', familyName: 'Quinn'})
CREATE (denise)-[:CONNECTION {relationship: 'grandparent'}]->(billy)

// PAGE 2
// ------

CREATE (chris:Person {name: 'Chris', givenNames: 'Chris'})
CREATE (chris)-[:CONNECTION {relationship: 'stepparent'}]->(billy)
// Chris's children: Jake, Jona

// PAGE 3
// ------

// ...




