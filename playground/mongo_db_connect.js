//const mongoclient=require('mongodb').MongoClient;
const {MongoClient}=require('mongodb');



//object destructuring 

var ob={name:"akash",age:198};

var {name}= ob;
console.log(name)

//insertion command
// MongoClient.connect("mongodb://localhost:27017/ToDOs" , (err , db)=>{

// 	if(err)
// 	{
// 		return console.log("connection failde");
// 	}
// 	console.log("connection successfully");

// 	// no database created until we insert to create one we call the method
// 	//db.collection() 
// 	db.collection("todo").insertOne({
// 		"name" : "Akash Mishra",
// 		"who are you " : "Developer"

// 	}
// 	,(err,result)=>{

		
// 	});
	

	// db.collection('users').insertOne( {
	// 		"name" : "User 1",
			
	// 		"Identity" : "User"

	// } , (err,result)=>{

	// 		if(err)
	// 		{
	// 			return console.log("unable to insert");
	// 		}
	// 		//.ops wil include all documents
	// console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));


	// } );

	//getting collection all
	
	//closing the database is important to maintain integrity of the program
	
// 	db.close();	

// } );