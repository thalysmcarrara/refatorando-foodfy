const express = require('express')
const data = require('./data')

const nunjucks = require('nunjucks')

const server = express()

server.set('view engine', 'njk')
nunjucks.configure('views',
    {   
        express:server,
        autoescape: false,
        noCache: true
    })



server.use(express.static('public'))

server.get("/",function(req,res){
    const dataCards = []
    for(let i = 0; i < 6; i++){
        dataCards.push(data[i])
        dataCards[i]["index"] = i
    }
    return res.render('home',{data: dataCards})
})

server.get("/about",function(req,res){
    return res.render('about')
})

server.get("/recipes",function(req,res){
    return res.render('recipes',{data})
})

server.get("/:id", function(req,res){
    const index = req.params.id
    const filterData = data[index]
    console.log(index)
    return res.render("modal",{data: filterData})
})

server.listen(5000,function(){})