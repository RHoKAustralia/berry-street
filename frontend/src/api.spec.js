import { expect } from 'chai'
import pact from 'pact'

import api from './api'

import Person from './api.spec.Person'
import Relationship from './api.spec.Relationship'
import Case from './api.spec.Case'
const testSuites = [Person, Relationship, Case]

const mockServerStartupTimeout = 15000 // Slow in docker.
const port = 1234

const mimeAll = '*/*'
const mimeAppJson = 'application/json'
const headers = {
  request: { 'Accept': mimeAll },
  response: { 'Content-Type': mimeAppJson }
}

describe('Berry Street API', () => {
  const client = api(`http://localhost:${port}`)

  let provider = pact({
    consumer: 'Case Graph Web Consumer',
    provider: 'Case Graph Provider',
    port: port,
    done: (error) => {
      expect(error).to.be.null
    }
  })

  before(() => provider.setup(), mockServerStartupTimeout)
  after(() => provider.finalize())

  const testParams = { provider, client, headers }
  testSuites.forEach((it) => { it(testParams) })
})
