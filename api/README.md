# API for the Family Finder app
 
using the [HAL model](http://stateless.co/hal_specification.html)


## Cases

* staffName - string
* status    - string (TBD enum)
* dateOpened - string
* caseObjective - string
* subjects      - collection of Person URIs


### create Case

POST /cases

* Input: Case object
* Output
   * The new Case object
   * URI to retrieve/update the Case object later
   * URI for the Case object's Subjects collection


### update Case

PUT :caseURI


### link a Case to a subject

POST :caseURI/subjects

* Input: URI of a Person


### find all

GET /cases

* Optional params
  * size - Limit number of results returned
* Output
  * list of Case objects
  * _links - URI of each case; URI to switch pages in the search result



## People

A Person may be (a) a Subject of Cases, (b) kith / kin of another Person.

* name  - string
* mother - a Person URI (optional)
* father - a Person URI (optional)


### create Person

POST /persons

* Input: Person object
* Output
   * The new Person object
   * URI to retrieve/update the Person object later


### update Person

PUT :personURI


### search for Person

GET /persons?nameContains=:fragment

Returns Case objects
