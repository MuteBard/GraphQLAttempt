# GraphQL

GraphQL was build to solve a specific set of problems within RESTful Routing
![](./imageNotes/shortcomings1.png) 

Companies or the positions for all of those friends is where life starts to get really really challenging when crafting the route.
Supposedly we try to make it work, the downside is that we will be making too many HTTP requests than we would like. Many calls to get the position and another to get the company for every set of friends. Thats stupid.

![](./imageNotes/shortcomings2.png)

**This is dumb**

in addition, even when we start to hone in on a very particular endpoint that we might be happy with we have to think very carefully about what data were serving back to the application because we might be dramatically over serving the amount of data that were tossing back to the client.

## So what is GraphQL trying to fix?

This is what graphQL is looking to fix. It wants to fix some real big inconsistencies or challenges around restful routing and also tackle big issues around over serving data.

![](./imageNotes/graph1.png)

A graph is a data structure that contains nodes and relations between each of these nodes which refer to as edges. This is the graph that GraphQL is refering to. Once we have organized our data into a graph we can query it using graph.


## How do we make a Query?

Let's imagine that we want to start with user 23. I want to find all of their friends who are other users in the application.
And then I want to find all of the companies that those users work at.

**Step 1**
First we start off by telegraph whether we want to make a query.

![](./imageNotes/graphquery1.png)

**Step 2**

![](./imageNotes/graphquery2.png)

**Step 3**

![](./imageNotes/graphquery3.png)
