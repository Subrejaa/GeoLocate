var express=require('express')
var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json())
const{MongoClient,ObjectId}=require('mongodb')
var url="mongodb://127.0.0.1:27017/"
var cors=require('cors')
app.use(cors())
app.get("/viewloc",(req,res)=>{
    MongoClient.connect(url,function(err,con){
        var dbo=con.db("GeolocateMap")
        dbo.collection("Distance").find().toArray(function(err,data){
            res.send(data)
        })
    })
})

app.post("/locinsert",function(req,res){
    MongoClient.connect(url,function(err,conn){
        var db=conn.db("GeolocateMap")
        db.collection("Distance").insertOne(req.body,(err,data)=>{
                res.send(data)
                                            
                
            })
        })
    })
    app.put('/viewdetmap',(req,res)=>{
        MongoClient.connect(url,(err,conn)=>{
            var dbo=conn.db('GeolocateMap')
            dbo.collection('Distance').updateOne({_id:ObjectId(req.body._id)},
            {$set:{sourcelat: req.body.sourcelat,
                sourcelng: req.body.sourcelng,
                dlat: req.body.dlat,
                dlng: req.body.dlng,
            distance:req.body.distance,
        From:req.body.From,
    To:req.body.To}},(err,data)=>{
                res.send(data)
            })
        })
    })
    app.listen(9090,()=>{console.log("Port is 9090")})