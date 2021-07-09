import axios from 'axios';

const url = 'http://localhost:5000/posts'

export const sendSingleCodeApi = async (data) =>{
    console.log('data received in api function', data)
    try{
        const { data } = await axios.post(url, data);
        return data
    } catch(error){
        console.log('Error while getting data', error)
    }
}