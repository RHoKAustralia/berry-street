package au.org.berrystreet.familyfinder.api.domain

class CaseTest extends GroovyTestCase {

    void testZeroCase() {
        // Given an empty Case
        Case testCase = new Case()

        // Expect no subjects
        assertEquals("Case for: ", testCase.displayName)
    }

    void testOneCase() {
        // Given one subject
        Case testCase = new Case()
        Person steve = new Person()
        steve.givenNames = "Steven"
        steve.familyName = "Hendry"
        testCase.subject = steve

        // Expect the case name to have the subject
        assertEquals("Case for: Steven Hendry", testCase.displayName)
    }

}
