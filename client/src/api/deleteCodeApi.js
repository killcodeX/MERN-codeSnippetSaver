import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const deleteCodeApi = async (id) =>{
    console.log('id received', id)
    try{
        const { data }  = await axios.delete(`${url}/${id}`);
        return data
    } catch(error){
        console.log('Error while updating data', error)
    }
}