import axios from "axios";
import {CONFIG} from "../constants";


export const getAllEmergencies = () =>
    axios
        .get('https://emergency.fireapp.website/emergency', CONFIG)
        .then((response) => response.data)
        .catch((error) => console.log(error))

export const putEmergency = (id, emergency, departmentId) =>
    axios
        .put(`https://emergency.fireapp.website/emergency/${departmentId}/${id}`, emergency, CONFIG)
        .then()
        .catch(err => console.log(err))

export const postEmergency = (emergency) =>
    axios
        .post("https://emergency.fireapp.website/emergency", emergency, CONFIG)
        .then()
        .catch(err => console.log(err))