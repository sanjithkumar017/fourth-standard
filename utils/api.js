import axios from 'axios';

const BASE_URL = "http://localhost:3000/fourth-standard/"


export const makeAuth = ({username, password}) => {

    return axios.get(BASE_URL + "/auth/", {
        username,
        password
    })
        .then((result) => {
            return result.data
        })
        .catch((err) => {
            console.error("Err makeAuth ", err);
            throw Error("Something wrong with makeAuth" + err)
        })
}