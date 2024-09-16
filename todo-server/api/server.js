const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const db = require('./dbConfig')


const server = express();

server.use(cors())
server.use(helmet())
server.use(express.json())

server.get('/', (req,res)=>{
    res.send("running")
})

server.get('/todos', async (req,res)=>{
try {
    const todos = await db('todos')
    res.json(todos)

} catch (error) {
    console.log(error)
}

})

server.get('/todos/:id', async (req,res)=>{
  
    const {id} = req.params


    try {
   const currentTodos=  await db('todos').where({id})

       currentTodos.length ===0? res.status(404).send({message: "not found"}) :     res.status(200).send(currentTodos)


    
    } catch (error) {
        console.log(error)
    }
    
    })


server.post('/todos', async (req,res)=>{

    const {message} = req.body
    if(!message){
        return res.status(400).json({message : "you must have a message body"})
    }
        try {
            await db('todos').insert({message})
            res.status(200).json({message : "todo stored succesfully"})
            
        } catch (error) {
            console.log(error)
            
        }


})
server.put('/todos/:id', async (req,res)=>{
        const {id} = req.params
        const {message} = req.body
        if(!message){
            return res.status(400).json({message : "you must have a message body"})
        }

        try {
            await db('todos').where({id}).update({message})
            res.status(200).send({message: "successfully updated"})
        } catch (error) {
            console.log(error)
        }


})
server.delete('/todos/:id', async (req,res)=>{
    const {id} = req.params
   

    try {
        await db('todos').where({id}).del()
        res.status(200).send({message: "successfully deleted"})
    } catch (error) {
        console.log(error)
    }
})



module.exports = server;
