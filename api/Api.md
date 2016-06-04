
## Cases

### create case

POST /case

* Staff name

return json object

* case id


### find all

GET /case

* list
    * case id
    * staff name
    * child


### get

GET /case/:id

* json object
    - Staff name
    - subject
    - status
    - date opened
    - case number
    - case objective
    

### update case

PUT /case/:id

* Staff name
    

### Link subject to Case

POST /case/:caseId/person/:personId

* return json object
    - Guardians
    - Siblings
    - Other

## People


### Create subject and/or person

POST /person
    
* json object
    * name
    * ...

### Update person

POST /person/:personId

* json object
    * name
    * ...

### Get relationships

GET /person/:personId/relationships

* list of directly connected people
    * person id
    * name
    

### Link people

POST /person/:personId/relationshipWith/:personId

* json object
    - connection type
    - relationship health
    - etc
