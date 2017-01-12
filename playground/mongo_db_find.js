const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/ToDOs", ( err,db) =>
{
	if(err)
	{
		return console.log("error while connecting the file");
	}

	console.log("connection successfully");
	var a="Akash Mishra";
	db.collection('todo').find({name:"Akash Mishra","who are you":"Developer"}).toArray().then( (doc)=>
	{
			//console.log(`total count of colelction is ${doc}`);
			console.log(JSON.stringify(doc,undefined,2))
	},
	(err)=>{
		console.log("unable to find colleciton");
	} );
	db.close();
});