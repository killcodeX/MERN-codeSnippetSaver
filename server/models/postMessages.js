import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title:String,
    desc:String,
    language: String,
    code:String,
    createdAt:{
        type : Date,
        default: new Date()
    },
    updatedAt:{
        type : Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;