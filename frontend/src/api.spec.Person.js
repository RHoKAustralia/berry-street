import { expect } from 'chai'
import pact from 'pact'
const { somethingLike: like } = pact.Matchers

export default ({ provider, client, headers }) =>
  describe('Person', () => {
    beforeEach(() => provider.removeInteractions())
    afterEach(() => provider.verify())

    describe('gets a person', () => {
      // given:
      beforeEach(() =>
        provider.addInteraction({
          state: 'person 17 (Homer Simpson)',
          uponReceiving: 'request to fetch person 17',
          withRequest: {
            method: 'GET',
            path: '/people/17',
            headers: headers.request
          },
          willRespondWith: {
            status: 200,
            headers: headers.response,
            body: {
              'id': 17,
              'givenNames': 'Homer',
              'familyName': 'Simpson',
              'gender': 'Male',
              'atsi': false,
              'atsiLocation': null,
              'image': null,
              'dateOfBirth': '1967-04-19'
            }
          }
        })
      )

      // when:
      it('', () => client.getPerson(17)
      // then:
        .then((body) => {
          expect(body).to.eql({
            'id': 17,
            'givenNames': 'Homer',
            'familyName': 'Simpson',
            'gender': 'Male',
            'atsi': false,
            'atsiLocation': null,
            'image': null,
            'dateOfBirth': '1967-04-19'
          })
        })
      )
    })
  })
