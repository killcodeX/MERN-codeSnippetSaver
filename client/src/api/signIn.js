import axios from 'axios';

const url = 'http://localhost:5000/users/signin'

export const signInApi = async (formData) =>{
    try{
        const { data } = await axios.post(url,formData);
        return data
    } catch(error){
        console.log('Error while getting data', error)
    }
}