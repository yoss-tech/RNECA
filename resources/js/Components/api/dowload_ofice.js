import axiosInstance from './axiosInstance'

export const dowloadOfice = async (id) => {
  try {
    const response = await axiosInstance.get(`/documents/${id}`, {responseType: 'blob'});
    return response.data;

  } catch (error) {
    console.log(error);
    throw error;
  }
}

