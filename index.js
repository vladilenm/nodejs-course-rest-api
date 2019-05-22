const express = require('express')
const path = require('path')
const graphqlHTTP = require('express-graphql')
const sequelize = require('./utils/database')
const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')
const app = express()
const PORT = process.env.PORT || 4200

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use(
  graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
  })
)

app.use((req, res, next) => {
  res.sendFile('/index.html')
})

async function start() {
  try {
    await sequelize.sync()
    app.listen(PORT)
  } catch (e) {
    console.log(e)
  }
}

start()
