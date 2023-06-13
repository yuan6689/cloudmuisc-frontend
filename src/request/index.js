import axios from 'axios'

let service = axios.create({
  baseURL: "https://yuan6686project.eu.org/",
  timeout: 5000,
  withCredentials: true
})

export default service;