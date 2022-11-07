// Import express and cors

const express = require('express')
const cors = require('cors') // Cross Origin Resource Sharing

// Invoke express and save to a new variable called app

const app = express()

// Set up Middleware - External code you want to run each time your server starts
app.use(express.json())
app.use(cors())

const dummyDatabase = ['turkey', 'ham', 'deviled eggs', 'mashed potatoes', 'pigs in a blanket','pot roast', 'rolls', 'carrot cake', 'pumpkin pie', 'pecan pie']

app.get('/api/inventory', (req, res) => {

    if(req.query.item){
        console.log('We hit our if statement!')

        const filteredItems = dummyDatabase.filter((food) => food.includes(req.query.item))

        res.status(200).send(filteredItems)

    }else{
        console.log('we hit our else statement')
        res.status(200).send(dummyDatabase)
    }

})

app.get('/api/inventory/:id', (req, res) => {
    console.log(req.params)

    let oneItem = dummyDatabase[req.params.id]

    res.status(200).send(oneItem)
})

// Open door (port) to server
app.listen(5050, () => {
    console.log('Server is running on port 5050')
})