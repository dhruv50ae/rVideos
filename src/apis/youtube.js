import axios from "axios";

const KEY = "AIzaSyCy7RhT2b9-r38NraxVO6bzfVra8o8zTbM";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
