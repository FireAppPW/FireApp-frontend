import axios from "axios";
import {CONFIG} from "../constants";


export const getAllCourses = () =>
    axios
        .get('https://course.fireapp.website/course', CONFIG)
        .then((response) => response.data)
        .catch((error) => console.log(error))

export const getCourseById = (id) =>
    axios
        .get('https://course.fireapp.website/course/' + id, CONFIG)
        .then((response) => response.data)
        .catch((error) => console.log(error))

export const putCourse = (id, course) =>
    axios
        .put(`https://course.fireapp.website/course/${id}`, course, CONFIG)
        .then()
        .catch(err => console.log(err))

export const postCourse = (course) =>
    axios
        .post("https://course.fireapp.website/course", course, CONFIG)
        .then()
        .catch(err => console.log(err))

export const deleteCourseById = (id) =>
    axios
        .delete("https://course.fireapp.website/course/"+ id, CONFIG)
        .then()
        .catch(err => console.log(err))