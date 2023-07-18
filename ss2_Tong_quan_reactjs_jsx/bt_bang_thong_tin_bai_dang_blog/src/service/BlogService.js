import axios from "axios";

export const getAllPost = async () => {
    try {
        const res = await axios.get(`http://localhost:8081/posts`);
        return res.data;
    } catch (e) {
        console.log(e)
    }
}
