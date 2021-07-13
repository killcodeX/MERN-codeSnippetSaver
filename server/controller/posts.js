import PostMessage from "../models/postMessages.js";
import mongoose from "mongoose";

export const getPost = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const body = req.body;
  //console.log('received in backend', body)
  const newPost = new PostMessage(body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Code Snippet with that Id");

  const update = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(update);

  // try {

  //   res.status(201).json(update);
  // } catch (error) {
  //   res.status(404).json({ message: error.message });
  // }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log("id received in backend", id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Code Snippet with that Id");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post Deleted Successfully" });
};

export const getLanguage = async (req, res) => {
  const { language } = req.query;
  let result;
  try{

    if(language == 'All Languages'){
      result = await PostMessage.find();
    } else{
      result = await PostMessage.find({language : language});
    }
    res.status(200).json(result);
  } catch(error){
    res.status(404).json({ message: error.message });
  }
};
