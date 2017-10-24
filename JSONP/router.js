app.get('/jsonp',function(req,res){

    var data = 'JSONP success'  
    if(req.query.callback){
        res.send(req.query.callback + '(' + JSON.stringify(data) + ')')
    } else{
        res.send(JSON.stringify(data))
    }
})
