import axiosInstance from "./axios.instance";

const fetchDownloadFiles = async () => {
  try {
    const response = await axiosInstance.get("/downloads");
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

export default fetchDownloadFiles;
