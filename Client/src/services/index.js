import axios from "axios"
import BASE_URL from "./contant"

export async function getAllData(id) {
    try {
      const response = await axios(`${BASE_URL}/shop/`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  export async function getDataById(id) {
    try {
      const response = await axios(`${BASE_URL}/shop/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  export async function deleteDataById(id) {
    try {
      const response =  axios.delete(`${BASE_URL}/shop/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  export async function addNewData(payloader) {
    try {
      const response = axios.post(`${BASE_URL}/shop/`,payloader);
      return response;
    } catch (error) {
      console.log(error);
    }
  }