const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    instructor: { type: String, default: "TBA" },
    subject: { type: String, required: true },
    icon: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model("Course", courseSchema);