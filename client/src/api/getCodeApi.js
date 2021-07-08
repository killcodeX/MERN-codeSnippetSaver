import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const getCodeApi = async () =>{
    try{
        const { data } = await axios.get(url);
        return data
    } catch(error){
        console.log('Error while getting data', error)
    }
}