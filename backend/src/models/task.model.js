import mongoose from "mongoose";


const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    dueDate: Date,
    status: { type: String, enum: ['To-Do', 'In-Progress', 'Done'], default: 'To-Do' },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    // members: [{ type: String }],
    // assignee: String,
    // comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

export default mongoose.model('Task', taskSchema);