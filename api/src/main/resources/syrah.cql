// SYRAH

// 25 May

CREATE (syrahCase:Case {
    staffName: 'Marcus', status: 'Open', phaseOfInvolvement: 'Referred',
    dateOpened: '2016-10-05',
    caseManager: 'Stacey Ryan',
    familyFinderStaffName: 'Marcus Shearer',
    caseObjective: 'care for Syrah and Aiden, and maintain contact with Rowan and Kimmie and Brylee'
    })

CREATE(syrah:Person:GraphNode:GraphItem {name:        'Syrah Ward', givenNames: 'Syrah', familyName: 'Ward',
                                         dateOfBirth: '2002-03-19',
                                         image:       'http://q1065.fm/files/2013/05/Nicole11.jpg?w=600&h=0&zc=1&s=0&a=t&q=89'})
CREATE (syrah)-[:SUBJECT {date: '2016-10-05'}]->(syrahCase)

CREATE (kimmie:Person:GraphNode:GraphItem {name: 'Kimmie Charles', givenNames: 'Kimmie', familyName: 'Charles'})
CREATE (kimmie)-[:CONNECTION {relationship: 'parent'}]->(syrah)

CREATE (rowan:Person:GraphNode:GraphItem {name: 'Rowan Quinn', givenNames: 'Rowan', familyName: 'Quinn'})
CREATE (rowan)-[:CONNECTION {relationship: 'parent'}]->(syrah)
// Connect to Billy case - this is the same Rowan

CREATE (aiden:Person:GraphNode:GraphItem {name: 'Aiden', givenNames: 'Aiden'})
CREATE (aiden)-[:CONNECTION {relationship: 'brother'}]->(syrah)
//create (aiden)-[:SUBJECT {date: '2016-10-05'}]->(syrahCase)

CREATE (brylee:Person:GraphNode:GraphItem {name: 'Brylee', givenNames: 'Brylee'})
CREATE (brylee)-[:CONNECTION {relationship: 'halfsister'}]->(syrah)

// 29 May

CREATE (denise:Person:GraphNode:GraphItem {name: 'Denise Quinn', givenNames: 'Denise', familyName: 'Quinn'})
CREATE (denise)-[:CONNECTION {relationship: 'grandparent'}]->(syrah)
// Connect to Billy case - this is the same Denise

CREATE (sandra:Person:GraphNode:GraphItem {name: 'Sandra Charles', givenNames: 'Sandra', familyName: 'Charles'})
CREATE (sandra)-[:CONNECTION {relationship: 'grandparent'}]->(syrah)

CREATE (andy:Person:GraphNode:GraphItem {name: 'Andy Charles', givenNames: 'Andy', familyName: 'Charles'})
CREATE (andy)-[:CONNECTION {relationship: 'grandparent'}]->(syrah)

CREATE (donna:Person:GraphNode:GraphItem {name: 'Donna', givenNames: 'Donna'})
CREATE (donna)-[:CONNECTION {relationship: 'aunt'}]->(syrah)

// ...
