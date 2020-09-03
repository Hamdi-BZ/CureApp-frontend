import axios from "axios";
var API_URL = "http://localhost:8080/api/images";
export const uploadAction = async (image) => {
  const fd = new FormData();
  fd.append("image", image);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const res = await axios.post(API_URL, fd, config);
    var ph = res.data.substring(84, res.data.length);
    localStorage.setItem("imagepath", ph);
  } catch (err) {
    console.log(err);
  }
};
