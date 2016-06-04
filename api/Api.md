
## create case

POST /case
- Staff name

return case id


## update case

PUT /case/:id
- Staff name


## find all

GET /case
- list
    - case id
    - Staff name
    - Child


## get

GET /case/:id
    - Staff name
    - subject
    - status
    - date opened
    - case number
    - case objective


## Get relationships

GET /person/:personId/relationships

- list of directly connected people
    - person id


## Create subject and/or person

POST /person
    - name
    ...


## Link subject to Case

POST /case/:caseId/subject/:subjectId

Guardians
Siblings
Other

## Link people

POST /person/:personId/relationshipWith/:personId
    - connection type
    - relationship health
    - etc
