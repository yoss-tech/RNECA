import axiosInstance from "./axiosInstance";

export const create_program = async (data) =>{
    try{
        const response = await axiosInstance.post('/create_program', data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return null;
    }
}