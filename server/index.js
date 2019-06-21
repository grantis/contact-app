import { ApolloServer, gql } from "apollo-server-express"
import express from "express"
// instance of express
const app = express()

const resolvers = {
  Query: {
    contacts: () => contacts
  }
}

const contacts = [
  {
    id: 1,
    firstName: "J.K.",
    lastName: "Rowling",
    company: "Disney",
    jobTitle: "Author",
    email: "jk@potter.com",
    phoneNumber: "09242114242"
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Crichton",
    company: "ACME",
    jobTitle: "CEO",
    email: "topdog@ACME.com",
    phoneNumber: "8249248424"
  }
]

const typeDefs = gql`
  type Contact {
    id: Int!
    firstName: String
    lastName: String
    company: String
    jobTitle: String
    email: String
    phoneNumber: Int
  }
  type Query {
    contacts: [Contact]
  }
`

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app })

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)
