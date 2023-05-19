import axios from 'axios'

let service = axios.create({
  baseURL: "http://192.168.1.104:3000/",
  timeout: 3000,
  withCredentials: true
})

export default service;