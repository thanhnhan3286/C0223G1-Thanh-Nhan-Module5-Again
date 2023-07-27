import axios from "axios";

export const findAllContract = async () => {
    try {
        return (await axios.get(`http://localhost:8080/contract`)).data;
    }catch (e) {
        console.log(e)
    }
}