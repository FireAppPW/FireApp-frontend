import axios from "axios";
import {CONFIG} from "../constants";

export const getAllUsers = () =>
    axios
        .get(`https://account.fireapp.website/account`, CONFIG)
        .then((response) => response.data)
        .catch((error) => console.log(error))

export const getUserById = (departmentId,id) =>
    axios
        .get(`https://account.fireapp.website/account/${departmentId}/${id}`, CONFIG)
        .then((response) => response.data)
        .catch((error) => console.log(error))

export const putUser = (departmentId,id, user) =>
    axios
        .put(`https://account.fireapp.website/account/${departmentId}/${id}`, user, CONFIG)
        .then()
        .catch(err => console.log(err))


export const postUser = (user) =>
    axios
        .post("https://account.fireapp.website/account", user, CONFIG)
        .then()
        .catch(err => console.log(err))

export const deleteUserById = (departmentId,id) =>
    axios
        .delete(`https://account.fireapp.website/account/${departmentId}/${id}`, CONFIG)
        .then()
        .catch(err => console.log(err))

