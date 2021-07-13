import axios from "axios";

const url = "http://localhost:5000/posts";

export const sendSingleCodeApi = async (values) => {
  console.log("data received in api function", values);
  try {
    const { data } = await axios.post(url, values);
    return data;
  } catch (error) {
    console.log("Error while getting data", error);
  }
};
