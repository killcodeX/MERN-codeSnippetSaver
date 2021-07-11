import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const editCodeApi = async (id, updata) =>{
    try{
        const { data }  = await axios.patch(`${url}/${id}`, updata);
        return data
    } catch(error){
        console.log('Error while updating data', error)
    }
}