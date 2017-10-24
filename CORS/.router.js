function setRouter(app){ 
 var router = app; 

app.get('/CORS', function (req,res) {

        res.setHeader('Access-Control-Allow-Origin', '*')

        var data = 'CORS SUCCESS'

        res.send(JSON.stringify(data))

    })}
 module.exports.setRouter = setRouter
