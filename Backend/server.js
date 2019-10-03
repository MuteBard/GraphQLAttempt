const express = require("express")
//glue layer between graphql and express
const expressGraphQL = require("express-graphql")
const app = express()

//any request that comes into our app, looking for the route, /GraphQL, we want the GraphQL library to handle it
app.use('/graphql', expressGraphQL({
    graphiql : true
}))

app.listen(4000, () => {
    console.log("connected on port 4000")
})

