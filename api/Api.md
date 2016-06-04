
## Cases

### create case

POST /case

* staffName

return json object

* caseId


### find all

GET /case

* list
    * caseId
    * staffName
    * childName


### get

GET /case/:id

* json object
    - staffName
    - subject
    - status
    - dateOpened
    - caseId
    - caseObjective
    

### Link subject to Case

POST /case/:caseId/person/:personId



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
    * personId
    * name
    * relationship
    

### Link people

POST /person/:personId/relationshipWith/:personId

* json object
    - connectionType
    - relationshipHealth
    - etc

