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
          state: 'one case',
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
                'id': 191,
                'familyFinderStaffName': 'Dolores',
                'caseManager': 'Jen',
                'status': 'Open',
                'dateOpened': '2016-08-05',
                'dateClosed': null,
                'subject': {
                  'id': 182,
                  'displayName': 'Bart Simpson',
                  'dateOfBirth': '1987-04-19'
                }
              }
            ]
          }
        })
      )

      // when:
      it('should get cases', () => client.getCases()
      // then:
        .then((body) => {
          expect(body).to.eql([
            {
              'id': 191,
              'familyFinderStaffName': 'Dolores',
              'caseManager': 'Jen',
              'status': 'Open',
              'dateOpened': '2016-08-05',
              'dateClosed': null,
              'subjects': [
                {
                  'id': 255,
                  'person': {
                    'id': 182,
                    'name': 'Bart Simpson',
                    'dateOfBirth': '1987-04-19',
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

    describe('gets a case', () => {
      // given:
      beforeEach(() =>
        provider.addInteraction({
          state: 'one case',
          uponReceiving: 'request to fetch one cases',
          withRequest: {
            method: 'GET',
            path: '/cases/191',
            headers: headers.request
          },
          willRespondWith: {
            status: 200,
            headers: headers.response,
            body: {
              'id': 191,
              'familyFinderStaffName': 'Dolores',
              'caseManager': 'Jen',
              'status': 'Open',
              'dateOpened': '2016-08-05',
              'dateClosed': null,
              'subjects': [
                {
                  'id': 255,
                  'person': {
                    'id': 182,
                    'name': 'Bart Simpson',
                    'dateOfBirth': '1987-04-19',
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
          }
        })
      )

      // when:
      it('should get a case', () => client.getCase(191)
      // then:
        .then((body) => {
          expect(body).to.eql(
            {
              'id': 191,
              'familyFinderStaffName': 'Dolores',
              'caseManager': 'Jen',
              'status': 'Open',
              'dateOpened': '2016-08-05',
              'dateClosed': null,
              'subjects': [
                {
                  'id': 255,
                  'person': {
                    'id': 182,
                    'name': 'Bart Simpson',
                    'dateOfBirth': '1987-04-19',
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
          )
        })
      )
    })
  })
