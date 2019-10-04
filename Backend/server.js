const express = require("express")
const graphQLHttp = require("express-graphql")
const {graphQLSchema} = require("./graphql/schema.js")
const {graphQLResolver} = require("./graphql/resolver.js")
const app = express()

console.log(graphQLSchema)
console.log(graphQLResolver)
app.use('/graphql', graphQLHttp({
    schema : graphQLSchema,
    rootValue : graphQLResolver,
    graphiql : true
}))

app.listen(4000, () => {
    console.log("connected on port 4000")
})

