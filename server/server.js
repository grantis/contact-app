// const path = require('path')
// const express = require('express')
// const server = express()

// server.use(express.json())
// server.use(express.static(path.join(__dirname, './public')))

// server.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })

// module.exports = server

const { ApolloServer, gql } = require("apollo-server-express")
const express = require("express")

const app = express()

const typeDefs = gql`
  type Query {
    hello: String!
  }
`
const resolvers = {
  Query: {
    hello: () => "hello"
  }
}
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => {
  console.log(`Listening on port 4000${server.graphqlPath}`)
})
