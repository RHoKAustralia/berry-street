const pact = require('@pact-foundation/pact-node')
const path = require('path')
const version = require('./package').version

const { pactBrokerAccount, pactBrokerUsername, pactBrokerPassword } = process.env

const consumerName = 'case_graph_web_consumer'
const providerName = 'case_graph_provider'

const opts = {
  pactUrls: [
    path.resolve(__dirname, `./pacts/${consumerName}-${providerName}.json`)
  ],
  pactBroker: `https://${pactBrokerAccount}.pact.dius.com.au`,
  pactBrokerUsername: pactBrokerUsername,
  pactBrokerPassword: pactBrokerPassword,
  consumerVersion: version
}

pact.publishPacts(opts)
