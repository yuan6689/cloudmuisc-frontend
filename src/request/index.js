import axios from 'axios'

let service = axios.create({
  baseURL: "https://netease-cloud-music-api-omega-kohl.vercel.app/",
  timeout: 3000,
  withCredentials: true
})

export default service;