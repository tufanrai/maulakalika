import axiosInstance from "./axios.instance";

const fetchDownloadFiles = async () => {
  try {
    const response = await axiosInstance.get("/projects");
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

export default fetchDownloadFiles;
