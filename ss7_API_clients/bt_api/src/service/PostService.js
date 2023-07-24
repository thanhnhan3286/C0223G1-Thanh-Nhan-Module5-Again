import axios from "axios";

export const create = async (value) => {
    try {
        await axios.post(`http://localhost:8080/posts`, value);
    } catch (e) {
        console.log(e)
    }
}

export const findAll = async () => {
    try {
        return (await axios.get(`http://localhost:8080/posts?_sort=id&_order=desc`)).data;
    } catch (e) {
        console.log(e)
    }
}