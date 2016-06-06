
## Cases

### create case

POST /case

* staffName

return json object

* id


### find all

GET /case

* list
    * staffName
    * subject
    * status
    * dateOpened
    * id
    * caseObjective


### get

GET /case/:caseId

* json object
    - staffName
    - subject
    - status
    - dateOpened
    - id
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
    * id
    * name
    * relationship
    

### Link people

POST /person/:personId/relationshipWith/:personId

* json object
    - connectionType
    - relationshipHealth
    - etc

