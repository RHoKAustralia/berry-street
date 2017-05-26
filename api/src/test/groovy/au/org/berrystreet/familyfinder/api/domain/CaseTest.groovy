package au.org.berrystreet.familyfinder.api.domain

class CaseTest extends GroovyTestCase {

    void testZeroCase() {
        // Given an empty Case
        Case testCase = new Case()

        // Expect no subjects
        assertEquals("Case for: ", testCase.displayName())
    }

    void testOneCase() {
        // Given one subject
        Case testCase = new Case()
        Person steve = new Person()
        steve.givenNames = "Steven"
        steve.familyName = "Hendry"
        new Subject(steve, testCase, "12/01/84")

        // Expect the case name to have the subject
        assertEquals("Case for: Steven Hendry", testCase.displayName())
    }

    void testTwoCase() {
        // Given two subjects
        Case testCase = new Case()
        Person steve = new Person()
        steve.givenNames = "Steven"
        steve.familyName = "Hendry"
        new Subject(steve, testCase, "12/01/84")
        Person bilbo = new Person()
        bilbo.givenNames = "Bilbo"
        bilbo.familyName = "Baggins"
        new Subject(bilbo, testCase, "12/01/84")

        // Expect the case name to have both
        assertEquals("Case for: Steven Hendry; Bilbo Baggins", testCase.displayName())
    }
}
