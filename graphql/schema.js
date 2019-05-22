const {buildSchema} = require('graphql')

module.exports = buildSchema(`
  type User {
    name: String!
    email: String!
    age: Int!
  }

  type TestType {
    count: Int!
    users: [User!]!
  }

  input UserInput {
    name: String!
    email: String!
  }

  type Todo {
    id: ID!
    title: String!
    done: Boolean!
    createdAt: String
    updatedAt: String
  }

  type Query {
    test: TestType!
    random(min: Int!, max: Int!, count: Int!): [Float!]!
    getTodos: [Todo!]!
  }

  input TodoInput {
    title: String!
  }

  type Mutation {
    addTestUser(user: UserInput!): User!
    createTodo(todo: TodoInput!): Todo!
    completeTodo(id: ID!): Todo!
    deleteTodo(id: ID!): Boolean!
  }
`)