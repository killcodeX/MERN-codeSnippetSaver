import axios from 'axios';

const url = 'http://localhost:5000/post'

export const getCodeApi = async () =>{
    try{
        const data = await axios.get(url);
        console.log('data', data)
    } catch(error){
        console.log('Error while getting data', error)
    }
}