import axios from 'axios';

const url = 'http://localhost:5000/posts/language'

export const filterLangApi = async (lang) =>{
    try{
        const { data }  = await axios.get(`${url}/?language=${lang}`);
        return data
    } catch(error){
        console.log('Error while updating data', error)
    }
}