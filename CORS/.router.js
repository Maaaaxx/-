function setRouter(app){ 
 var router = app; 

app.get('/CORS', function (req,res) {

        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')

        var data = 'CORS SUCCESS'

        res.send(JSON.stringify(data))

    })}
 module.exports.setRouter = setRouter
