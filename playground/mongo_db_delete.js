const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/ToDOs", ( err,db) =>
{
	if(err)
	{
		return console.log("error while connecting the file");
	}

	//delete many

	// db.collection("todo").deleteMany({name : "Ankit Mishra "}).then( (result)=>
	// {
	// 		console.log("Deteled valuse ", JSON.stringify(result));
	// } );

	db.collection("todo").deleteOne({name: "shamsher vinayak"}).then( (result)=>
	{
			console.log("weldome body response is like this");
			console.log(JSON.stringify(result));
	} );

	//delete one


	//find and delete





	db.close();
});