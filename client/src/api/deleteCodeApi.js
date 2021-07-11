import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const deleteCodeApi = async (id) =>{
    try{
        const { data }  = await axios.patch(`${url}/${id}`);
        return data
    } catch(error){
        console.log('Error while updating data', error)
    }
}