const {MongoClient} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/ToDOs", ( err,db) =>
{
	if(err)
	{
		return console.log("error while connecting the file");
	}

	//find one and update

	db.collection("todo").findOneAndUpdate({name:"anan sharma"}, {$set: {name:" sharma"}} , {
			returnOriginal: false
	} ).then( (result)=>{

			console.log(result);
	} );
  

	db.close();
});