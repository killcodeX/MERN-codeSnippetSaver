import PostMessage from '../models/postMessages.js'

export const getPost = async (req,res) => {
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages)
        res.status(200).json(postMessages)
    } catch (error){
        res.status(404).json({ message: error.message})
    }
}


export const createPost = async (req,res) => {
    const body = req.body;
    //console.log('received in backend', body)
    const newPost = new PostMessage(body)
    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch(error){
        res.status(404).json({ message: error.message})
    }
}

export const updatePost = async (req,res) => {
    const {id:_id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Code Snippet with that Id')
    
    try{
        const update = await PostMessage.findByIdAndUpdate(_id,post,{ new : true} )
        res.status(201).json(update)
    } catch(error){
        res.status(404).json({ message: error.message})
    }
}