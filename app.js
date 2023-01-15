const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Mario = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/mario",async (req,res)=> {
    try {
        const marios = await Mario.find()
        res.json({
        status : "success",
        marios
        })
    }catch(e){
        res.status(400).json({
        status : "failed",
        message : e.message
        })
    }
})

app.get("/mario/:id",async (req,res)=> {
    try {
        const marios =await Mario.findById(req.params.id)
        console.log(marios)
        res.json({
        status : "success",
        marios
        })
    }catch(e){
        res.json({
        status : "failed",
        message : e.message
        })
    }
})

app.post("/mario",async (req,res)=> {
    try {
        const marios =await Mario.create(req.body)
        res.status(201).json({
        status : "success",
        marios
        })
    }catch(e){
        res.status(400).json({
        status : "failed",
        message :  'either name or weight is missing'
        })
    }
})

app.patch("/mario/:id",async (req,res)=> {
    try {
        const marios =await Mario.findByIdAndUpdate(req.params.id)
        res.status(200).json({
        status : "success",
        marios
        })
    }catch(e){
        res.status(400).json({
        status : "failed",
        message :  e.message
        })
    }
})


app.delete("/mario/:id",async (req,res)=> {
    try {
        const marios =await Mario.findByIdAndDelete(req.params.id)
        console.log(marios)
        res.status(200).json({
        status : "success",
        marios
        })
    }catch(e){
        res.status(400).json({
        status : "failed",
        message :  e.message
        })
    }
})

module.exports = app;