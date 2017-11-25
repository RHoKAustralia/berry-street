import { expect } from 'chai'
import pact from 'pact'
const { somethingLike: like } = pact.Matchers

export default ({ provider, client, headers }) =>
  describe('Relationship APIs', () => {
    beforeEach(() => provider.removeInteractions())
    afterEach(() => provider.verify())

    describe('gets all relationships from a case', () => {
      // given:
      beforeEach(() =>
        provider.addInteraction({
          state: 'a case with some people',
          uponReceiving: 'request to fetch relationships from a case',
          withRequest: {
            method: 'GET',
            path: '/cases/8/connections',
            headers: headers.request
          },
          willRespondWith: {
            status: 200,
            headers: headers.response,
            body: [
              {
                "id": 20,
                "from": {
                  "id": 8,
                  "givenNames": "Nelson",
                  "familyName": "Muntz",
                  "additionalNames": null,
                  "gender": null,
                  "dateOfBirth": "1987-04-19",
                  "atsi": null,
                  "atsiLocation": null,
                  "imageUrl": null,
                  "contactInformation": null,
                  "displayName": "Nelson Muntz"
                },
                "to": {
                  "id": 7,
                  "givenNames": "Groundskeeper",
                  "familyName": "Willie",
                  "additionalNames": null,
                  "gender": null,
                  "dateOfBirth": "1987-04-19",
                  "atsi": null,
                  "atsiLocation": null,
                  "imageUrl": null,
                  "contactInformation": null,
                  "displayName": "Groundskeeper Willie"
                },
                "type": null,
                "notes": "new friend"
              },
              {
                "id": 22,
                "from": {
                  "id": 7,
                  "givenNames": "Groundskeeper",
                  "familyName": "Willie",
                  "additionalNames": null,
                  "gender": null,
                  "dateOfBirth": "1987-04-19",
                  "atsi": null,
                  "atsiLocation": null,
                  "imageUrl": null,
                  "contactInformation": null,
                  "displayName": "Groundskeeper Willie"
                },
                "to": {
                  "id": 5,
                  "givenNames": "Milhouse",
                  "familyName": "Van Houten",
                  "additionalNames": null,
                  "gender": null,
                  "dateOfBirth": "1987-04-19",
                  "atsi": null,
                  "atsiLocation": null,
                  "imageUrl": null,
                  "contactInformation": null,
                  "displayName": "Milhouse Van Houten"
                },
                "type": null,
                "notes": "TEST"
              }
            ]
          }
        })
      )

      // when:
      it('', () => client.getRelationships(8)
      // then:
        .then((body) => {
          expect(body).to.eql(
            [{
              "id": 20,
              "from": {
                "id": 8,
                "givenNames": "Nelson",
                "familyName": "Muntz",
                "additionalNames": null,
                "gender": null,
                "dateOfBirth": "1987-04-19",
                "atsi": null,
                "atsiLocation": null,
                "imageUrl": null,
                "contactInformation": null,
                "displayName": "Nelson Muntz"
              },
              "to": {
                "id": 7,
                "givenNames": "Groundskeeper",
                "familyName": "Willie",
                "additionalNames": null,
                "gender": null,
                "dateOfBirth": "1987-04-19",
                "atsi": null,
                "atsiLocation": null,
                "imageUrl": null,
                "contactInformation": null,
                "displayName": "Groundskeeper Willie"
              },
              "type": null,
              "notes": "new friend"
            },
            {
              "id": 22,
              "from": {
                "id": 7,
                "givenNames": "Groundskeeper",
                "familyName": "Willie",
                "additionalNames": null,
                "gender": null,
                "dateOfBirth": "1987-04-19",
                "atsi": null,
                "atsiLocation": null,
                "imageUrl": null,
                "contactInformation": null,
                "displayName": "Groundskeeper Willie"
              },
              "to": {
                "id": 5,
                "givenNames": "Milhouse",
                "familyName": "Van Houten",
                "additionalNames": null,
                "gender": null,
                "dateOfBirth": "1987-04-19",
                "atsi": null,
                "atsiLocation": null,
                "imageUrl": null,
                "contactInformation": null,
                "displayName": "Milhouse Van Houten"
              },
              "type": null,
              "notes": "TEST"
            }
          ])
        })
      )
    })

    // describe('gets a relationship from a case')
  })
