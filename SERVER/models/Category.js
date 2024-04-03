const mongoose = require("mongoose");

<<<<<<< HEAD:server/models/Category.js
// Define the Tags schema
const categorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: { type: String },
	courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
	],
});

// Export the Tags model
module.exports = mongoose.model("Category", categorySchema);
=======
const tagsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description: {
        type:String,
    },
    course: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
});

module.exports = mongoose.model("Tag", tagsSchema);
>>>>>>> ea168bcc040e68e1260ea6544ab2c5c4fdacdd21:SERVER/models/Category.js
