import axios from "axios";
import {CONFIG} from "../constants";


export const getAllDepartments = () =>
    axios
        .get('https://department.fireapp.website/department', CONFIG)
        .then((response) => response.data)
        .catch((error) => console.log(error))

export const getDepartmentById = (id) =>
    axios
        .get('https://department.fireapp.website/department/' + id, CONFIG)
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const putDepartment = (id, department) =>
    axios
        .put("https://department.fireapp.website/department/" + id, department, CONFIG)
        .then()
        .catch(err => console.log(err))

export const postDepartment = (department) =>
    axios
        .post("https://department.fireapp.website/department", department, CONFIG)
        .then()
        .catch(err => console.log(err))

export const deleteDepartmentById = (id) =>
    axios
        .delete("https://department.fireapp.website/department/"+ id, CONFIG)
        .then()
        .catch(err => console.log(err))
