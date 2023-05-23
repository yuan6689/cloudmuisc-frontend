import axios from 'axios'

let service = axios.create({
  baseURL: "http://192.168.1.106:3000/",
  timeout: 3000,
  withCredentials: true
})

export default service;