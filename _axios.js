import { KEY } from "constant/key";
import nookies from "nookies";
import axios from 'axios'

export const AxiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})

AxiosClient.interceptors.request.use(req => {
    const cookies = nookies.get()

    if (cookies[KEY.TOKEN]) {
        req.headers['Authorization'] = `Bearer ${cookies[KEY.TOKEN]}`
    }

    return req
}, err => err)