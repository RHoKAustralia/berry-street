import { expect } from 'chai'
import pact from 'pact'
const { somethingLike: like } = pact.Matchers

export default ({ provider, client, headers }) =>
  describe('Cases APIs', () => {
    beforeEach(() => provider.removeInteractions())
    afterEach(() => provider.verify())

    describe('gets all cases', () => {
      // given:
      beforeEach(() =>
        provider.addInteraction({
          state: '',
          uponReceiving: 'request to fetch all cases',
          withRequest: {
            method: 'GET',
            path: '/cases',
            headers: headers.request
          },
          willRespondWith: {
            status: 200,
            headers: headers.response,
            body: [
                    {
                      '@id': '1',
                      'id': 191,
                      'familyFinderStaffName': 'Dolores',
                      'caseManager': 'Jen',
                      'status': 'Open',
                      'dateOpened': '2016-08-05',
                      'dateClosed': null,
                      'caseObjective': 'test Neo4J',
                      'phaseOfInvolvement': 'Referred',
                      'subjects': [
                        {
                          '@id': '2',
                          'id': 255,
                          'person': {
                            '@id': '3',
                            'id': 182,
                            'name': 'Bart Simpson',
                            'dateOfBirth': '1987-04-19',
                            'family': [],
                            'friends': [],
                            'givenNames': 'Bart',
                            'familyName': 'Simpson'
                          },
                          'aCase': {
                            '@ref': '1'
                          },
                          'date': '2016-08-05'
                        }
                      ]
                    }
                  ]
          }
        })
      )

      // when:
      it('should get cases', () => client.getCases()
      // then:
        .then((body) => {
          expect(body).to.eql(
          [
            {
              '@id': '1',
              'id': 191,
              'familyFinderStaffName': 'Dolores',
              'caseManager': 'Jen',
              'status': 'Open',
              'dateOpened': '2016-08-05',
              'dateClosed': null,
              'caseObjective': 'test Neo4J',
              'phaseOfInvolvement': 'Referred',
              'subjects': [
                {
                  '@id': '2',
                  'id': 255,
                  'person': {
                    '@id': '3',
                    'id': 182,
                    'name': 'Bart Simpson',
                    'dateOfBirth': '1987-04-19',
                    'family': [],
                    'friends': [],
                    'givenNames': 'Bart',
                    'familyName': 'Simpson'
                  },
                  'aCase': {
                    '@ref': '1'
                  },
                  'date': '2016-08-05'
                }
              ]
            }
          ])
        })
      )
    })
  })
