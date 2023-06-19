import Cookies from "js-cookie";


//`https://account.fireapp.website/
export const API_URL = "https://api.fireapp.website"

const token = JSON.parse(Cookies.get('token')).accessToken
export const CONFIG = {
    headers: {
        Authorization : `Bearer ${token}`
    }
}


const profileUser = JSON.parse(localStorage.getItem("user"))
export const PROFILE_DEPARTMENT_ID = profileUser.departmentId
export const PROFILE_ROLE = profileUser.roles
export const PROFILE_USER_ID = profileUser.userId
