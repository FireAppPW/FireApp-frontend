import axios from "axios";


export const getJWT = (tokenResponse) =>
    axios
        .post("https://api.fireapp.website/account/login", {"code": tokenResponse.access_token})
        .then((response) => response)
        .catch(err => console.log(err))

export const getGoogleProfile = (tokenResponse) =>
    axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenResponse.access_token}`,
                Accept: 'application/json'
            }
        })
        .then((res) => res)
        .catch((err) => console.log(err));