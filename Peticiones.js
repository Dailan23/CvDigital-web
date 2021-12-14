const express = require ('express')
const res = require('express/lib/response')
const app = express()
const port = 3000
app.set('view engine','ejs')
app.set('views',__dirname + '/views')



app.use(express.static(__dirname + "/public" ))

app.get('/',(req,res)=>{
    res.render("index",{
        titulo : "CV DIGITAL"
    })
})

app.get('/contactanos',(req,res)=>{
    res.render("contactanos",{
        tituloP : "contactanos",
        titulo : "contactanos"

    })
})


app.use((req, res, next)=>{
    titulo: "página no encontrada, favor de revisar tu URL"
    res.status(404).render("404",{
        titulo:"404"

    })
})


app.listen(port,()=>{
    console.log('Servidor OK, en el puerto',port)
})