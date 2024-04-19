import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.BASE_URL,
  })

const getAll = () => {
    const request = axiosInstance.get("/persons")
    return request.then(response => response.data)
}

const postNew = (newPerson) => {
    const request = axiosInstance.post("/persons", newPerson)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    const request = axiosInstance.delete(`/persons/${id}`)
    return request.then(response => response.data) 
}

const updateNumber = (id, person) => {
    const request = axiosInstance.put(`/persons/${id}`, person)
    return request.then(response => response.data)
}

export default { getAll, postNew, deletePerson, updateNumber }