import axios from "axios";

export const create = async (param) => {
    try {
        await axios.post(`http://localhost:8080/facility`,param);
    }catch (e) {
        console.log(e);
    }
}


export const findAllRoomStandard = async () => {
    try {
        return (await axios.get('http://localhost:8080/roomStandard')).data;
    } catch (e) {
        console.log(e);
    }
}


export const findAllFacilityType = async () => {
    try {
        return (await axios.get('http://localhost:8080/type')).data;
    } catch (e) {
        console.log(e);
    }
}


export const findAllRentalType = async () => {
    try {
        return (await axios.get('http://localhost:8080/rentalType')).data;
    } catch (e) {
        console.log(e);
    }
}


export const deleteFacility = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/facility/`+id);
    }catch (e) {
        console.log(e);
    }
}


export const findAllService = async () => {
    try {
        return (await axios.get(`http://localhost:8080/facility`)).data;
    }catch (e) {
        console.log(e);
    }
}